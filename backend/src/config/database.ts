import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME || 'thukral_clinic',
  user: process.env.DB_USER || 'thukral_app',
  password: process.env.DB_PASSWORD || '',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Create a connection pool for safe and efficient querying
export const pool = mysql.createPool(dbConfig);

// Helper to test connectivity
export async function testDbConnection(): Promise<{ connected: boolean; message: string }> {
  try {
    const connection = await pool.getConnection();
    try {
      await connection.ping();
      return { connected: true, message: 'Database connection successful' };
    } finally {
      connection.release();
    }
  } catch (error: any) {
    return {
      connected: false,
      message: error?.message || 'Database connection failed',
    };
  }
}
