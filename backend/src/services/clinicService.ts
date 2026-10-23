import { pool } from '../config/database';
import { AppointmentPayload, ContactMessagePayload } from '../types';

let appointmentsColumnsCache: Set<string> | null = null;
let contactColumnsCache: Set<string> | null = null;

// Inspect available columns in the existing table dynamically so we match the user's exact schema
async function getTableColumns(tableName: string): Promise<Set<string>> {
  try {
    const [rows]: any = await pool.query(
      `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?`,
      [tableName]
    );
    return new Set(rows.map((r: any) => String(r.COLUMN_NAME).toLowerCase()));
  } catch (err) {
    return new Set();
  }
}

export async function createAppointment(data: AppointmentPayload): Promise<{ id?: number | string; success: boolean }> {
  if (!appointmentsColumnsCache) {
    appointmentsColumnsCache = await getTableColumns('appointments');
  }
  const cols = appointmentsColumnsCache;

  // Build columns and values dynamically based on what exists in user's appointments table
  const fields: string[] = [];
  const values: any[] = [];
  const placeholders: string[] = [];

  // Name (mapped to patient_name, full_name, or name)
  if (cols.has('patient_name')) {
    fields.push('patient_name');
    values.push(data.name);
    placeholders.push('?');
  } else if (cols.has('full_name')) {
    fields.push('full_name');
    values.push(data.name);
    placeholders.push('?');
  } else if (cols.has('name') || cols.size === 0) {
    fields.push('name');
    values.push(data.name);
    placeholders.push('?');
  }

  // Phone (mapped to phone_number or phone)
  if (cols.has('phone_number')) {
    fields.push('phone_number');
    values.push(data.phone);
    placeholders.push('?');
  } else if (cols.has('phone') || cols.size === 0) {
    fields.push('phone');
    values.push(data.phone);
    placeholders.push('?');
  }

  // Email (if provided and column exists)
  if (cols.has('email')) {
    fields.push('email');
    values.push(data.email || null);
    placeholders.push('?');
  }

  // Date (mapped to preferred_date, appointment_date, or date)
  if (cols.has('preferred_date')) {
    fields.push('preferred_date');
    values.push(data.date);
    placeholders.push('?');
  } else if (cols.has('appointment_date')) {
    fields.push('appointment_date');
    values.push(data.date);
    placeholders.push('?');
  } else if (cols.has('date') || cols.size === 0) {
    fields.push('date');
    values.push(data.date);
    placeholders.push('?');
  }

  // Preferred time (if column exists)
  if (cols.has('preferred_time')) {
    fields.push('preferred_time');
    values.push(data.time || null);
    placeholders.push('?');
  }

  // Treatment / Concern
  if (cols.has('treatment')) {
    fields.push('treatment');
    values.push(data.treatment || null);
    placeholders.push('?');
  } else if (cols.has('concern')) {
    fields.push('concern');
    values.push(data.treatment || null);
    placeholders.push('?');
  } else if (cols.has('service')) {
    fields.push('service');
    values.push(data.treatment || null);
    placeholders.push('?');
  } else if (cols.size === 0) {
    fields.push('treatment');
    values.push(data.treatment || null);
    placeholders.push('?');
  }

  // Message / Notes
  if (cols.has('message')) {
    fields.push('message');
    values.push(data.message || null);
    placeholders.push('?');
  } else if (cols.has('notes')) {
    fields.push('notes');
    values.push(data.message || null);
    placeholders.push('?');
  } else if (cols.size === 0) {
    fields.push('message');
    values.push(data.message || null);
    placeholders.push('?');
  }

  // Status (if column exists)
  if (cols.has('status')) {
    fields.push('status');
    values.push('pending');
    placeholders.push('?');
  }

  const query = `INSERT INTO appointments (${fields.join(', ')}) VALUES (${placeholders.join(', ')})`;
  const [result]: any = await pool.execute(query, values);

  return { id: result.insertId, success: true };
}

export async function createContactMessage(data: ContactMessagePayload): Promise<{ id?: number | string; success: boolean }> {
  if (!contactColumnsCache) {
    contactColumnsCache = await getTableColumns('contact_messages');
  }
  const cols = contactColumnsCache;

  const fields: string[] = [];
  const values: any[] = [];
  const placeholders: string[] = [];

  // Name
  if (cols.has('full_name')) {
    fields.push('full_name');
    values.push(data.name);
    placeholders.push('?');
  } else if (cols.has('name') || cols.size === 0) {
    fields.push('name');
    values.push(data.name);
    placeholders.push('?');
  }

  // Phone
  if (cols.has('phone_number')) {
    fields.push('phone_number');
    values.push(data.phone || null);
    placeholders.push('?');
  } else if (cols.has('phone') || cols.size === 0) {
    fields.push('phone');
    values.push(data.phone || null);
    placeholders.push('?');
  }

  // Email
  if (cols.has('email')) {
    fields.push('email');
    values.push(data.email || null);
    placeholders.push('?');
  }

  // Subject
  if (cols.has('subject')) {
    fields.push('subject');
    values.push(data.subject || null);
    placeholders.push('?');
  }

  // Message
  if (cols.has('message') || cols.size === 0) {
    fields.push('message');
    values.push(data.message);
    placeholders.push('?');
  }

  const query = `INSERT INTO contact_messages (${fields.join(', ')}) VALUES (${placeholders.join(', ')})`;
  const [result]: any = await pool.execute(query, values);

  return { id: result.insertId, success: true };
}
