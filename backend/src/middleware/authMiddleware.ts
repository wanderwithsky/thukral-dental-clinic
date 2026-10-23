import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AdminAuthRequest extends Request {
  adminUser?: {
    id: number;
    username: string;
    role: string;
  };
}

export function requireAdminAuth(req: AdminAuthRequest, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authentication required. Please log in as an administrator.' });
    return;
  }

  const token = authHeader.split(' ')[1];
  const jwtSecret = process.env.JWT_SECRET || 'thukral_dental_default_secret_key';

  try {
    const decoded = jwt.verify(token, jwtSecret) as { id: number; username: string; role: string };
    req.adminUser = decoded;
    next();
  } catch (err: any) {
    res.status(401).json({ error: 'Session expired or invalid token. Please log in again.' });
    return;
  }
}
