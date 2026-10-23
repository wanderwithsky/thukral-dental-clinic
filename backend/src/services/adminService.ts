import { pool } from '../config/database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface AdminUser {
  id: number;
  username: string;
  email?: string;
  role: string;
  created_at: string;
}

export interface AppointmentRecord {
  id: number;
  patient_name: string;
  phone: string;
  email?: string | null;
  treatment?: string | null;
  preferred_date?: string | null;
  preferred_time?: string | null;
  message?: string | null;
  status: string;
  created_at: string;
}

export interface AppointmentOverview {
  total: number;
  pending: number;
  confirmed: number;
  completed: number;
  cancelled: number;
}

// Ensure admin_users table exists and initial admin is initialized from environment
export async function initializeAdminTable(): Promise<void> {
  const createTableSql = `
    CREATE TABLE IF NOT EXISTS admin_users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(80) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      email VARCHAR(254) NULL,
      role VARCHAR(30) DEFAULT 'admin',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `;

  await pool.query(createTableSql);

  // Check if any admin exists; if not, seed from environment
  const [rows]: any = await pool.query('SELECT COUNT(*) as cnt FROM admin_users');
  if (rows[0]?.cnt === 0) {
    const defaultUsername = process.env.ADMIN_USERNAME || 'thukral_admin';
    const defaultPassword = process.env.ADMIN_PASSWORD || 'ThukralAdmin#2026!';
    const defaultEmail = process.env.ADMIN_EMAIL || 'admin@thukraldental.net';

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(defaultPassword, salt);

    await pool.query(
      'INSERT INTO admin_users (username, password_hash, email, role) VALUES (?, ?, ?, ?)',
      [defaultUsername, passwordHash, defaultEmail, 'admin']
    );
    console.log(`[Admin] Initialized initial administrator account: ${defaultUsername}`);
  }
}

// Authenticate admin user
export async function authenticateAdmin(username: string, password: string):Promise<{ token: string; user: AdminUser } | null> {
  await initializeAdminTable();

  const [rows]: any = await pool.query(
    'SELECT id, username, password_hash, email, role, created_at FROM admin_users WHERE username = ? OR email = ? LIMIT 1',
    [username, username]
  );

  if (!rows || rows.length === 0) {
    return null;
  }

  const user = rows[0];
  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) {
    return null;
  }

  const jwtSecret = process.env.JWT_SECRET || 'thukral_dental_default_secret_key';
  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    jwtSecret,
    { expiresIn: '12h' }
  );

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      created_at: user.created_at,
    },
  };
}

// Get admin profile by ID
export async function getAdminById(id: number): Promise<AdminUser | null> {
  const [rows]: any = await pool.query(
    'SELECT id, username, email, role, created_at FROM admin_users WHERE id = ? LIMIT 1',
    [id]
  );
  if (!rows || rows.length === 0) return null;
  return rows[0] as AdminUser;
}

// Fetch appointment overview counts
export async function getAppointmentsOverview(): Promise<AppointmentOverview> {
  const [rows]: any = await pool.query(`
    SELECT 
      COUNT(*) AS total,
      SUM(CASE WHEN LOWER(COALESCE(status, 'pending')) IN ('pending', 'new') THEN 1 ELSE 0 END) AS pending,
      SUM(CASE WHEN LOWER(COALESCE(status, '')) = 'confirmed' THEN 1 ELSE 0 END) AS confirmed,
      SUM(CASE WHEN LOWER(COALESCE(status, '')) = 'completed' THEN 1 ELSE 0 END) AS completed,
      SUM(CASE WHEN LOWER(COALESCE(status, '')) = 'cancelled' THEN 1 ELSE 0 END) AS cancelled
    FROM appointments
  `);

  const r = rows[0] || {};
  return {
    total: Number(r.total) || 0,
    pending: Number(r.pending) || 0,
    confirmed: Number(r.confirmed) || 0,
    completed: Number(r.completed) || 0,
    cancelled: Number(r.cancelled) || 0,
  };
}

// Fetch appointments with search, filter, and pagination
export async function getAppointmentsList(filters: {
  search?: string;
  status?: string;
  date?: string;
  limit?: number;
  offset?: number;
}): Promise<{ appointments: AppointmentRecord[]; totalCount: number }> {
  const conditions: string[] = [];
  const params: any[] = [];

  // Search by patient name or phone
  if (filters.search && filters.search.trim()) {
    const q = `%${filters.search.trim()}%`;
    conditions.push('(patient_name LIKE ? OR phone LIKE ?)');
    params.push(q, q);
  }

  // Filter by status (normalizing 'pending' / 'new')
  if (filters.status && filters.status.trim() && filters.status.toLowerCase() !== 'all') {
    const s = filters.status.trim().toLowerCase();
    if (s === 'pending') {
      conditions.push('(LOWER(COALESCE(status, "pending")) IN ("pending", "new"))');
    } else {
      conditions.push('LOWER(status) = ?');
      params.push(s);
    }
  }

  // Filter by preferred date
  if (filters.date && filters.date.trim()) {
    conditions.push('preferred_date = ?');
    params.push(filters.date.trim());
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  // Get total count
  const countSql = `SELECT COUNT(*) as total FROM appointments ${whereClause}`;
  const [countRows]: any = await pool.query(countSql, params);
  const totalCount = Number(countRows[0]?.total) || 0;

  // Get records ordered by latest ID
  const limit = Math.min(Math.max(Number(filters.limit) || 50, 1), 200);
  const offset = Math.max(Number(filters.offset) || 0, 0);

  const listSql = `
    SELECT 
      id, 
      patient_name, 
      phone, 
      email, 
      treatment, 
      preferred_date, 
      preferred_time, 
      message, 
      status, 
      created_at
    FROM appointments
    ${whereClause}
    ORDER BY id DESC
    LIMIT ? OFFSET ?
  `;

  const [records]: any = await pool.query(listSql, [...params, limit, offset]);

  return {
    appointments: records as AppointmentRecord[],
    totalCount,
  };
}

// Fetch single appointment by ID
export async function getAppointmentById(id: number): Promise<AppointmentRecord | null> {
  const [rows]: any = await pool.query(
    `SELECT 
      id, 
      patient_name, 
      phone, 
      email, 
      treatment, 
      preferred_date, 
      preferred_time, 
      message, 
      status, 
      created_at
    FROM appointments 
    WHERE id = ? 
    LIMIT 1`,
    [id]
  );

  if (!rows || rows.length === 0) return null;
  return rows[0] as AppointmentRecord;
}

// Update appointment status
export async function updateAppointmentStatus(id: number, status: string): Promise<boolean> {
  const allowed = ['pending', 'confirmed', 'completed', 'cancelled'];
  const normalized = status.trim().toLowerCase();
  if (!allowed.includes(normalized)) {
    throw new Error(`Invalid status. Must be one of: ${allowed.join(', ')}`);
  }

  const [result]: any = await pool.query(
    'UPDATE appointments SET status = ? WHERE id = ?',
    [normalized, id]
  );

  return result.affectedRows > 0;
}
