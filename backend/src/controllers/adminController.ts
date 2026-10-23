import { Response } from 'express';
import { AdminAuthRequest } from '../middleware/authMiddleware';
import * as adminService from '../services/adminService';

// Admin login controller
export async function adminLogin(req: AdminAuthRequest, res: Response): Promise<void> {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ error: 'Username and password are required' });
      return;
    }

    const authResult = await adminService.authenticateAdmin(String(username).trim(), String(password));
    if (!authResult) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token: authResult.token,
      user: authResult.user,
    });
  } catch (err: any) {
    console.error('Admin login error:', err);
    res.status(500).json({ error: 'Internal server error during authentication' });
  }
}

// Admin me / session check
export async function getAdminProfile(req: AdminAuthRequest, res: Response): Promise<void> {
  try {
    if (!req.adminUser) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const user = await adminService.getAdminById(req.adminUser.id);
    if (!user) {
      res.status(404).json({ error: 'Admin user not found' });
      return;
    }

    res.status(200).json({ success: true, user });
  } catch (err: any) {
    console.error('Get admin profile error:', err);
    res.status(500).json({ error: 'Failed to retrieve profile' });
  }
}

// Get appointments overview (counts)
export async function getAppointmentsOverview(req: AdminAuthRequest, res: Response): Promise<void> {
  try {
    const overview = await adminService.getAppointmentsOverview();
    res.status(200).json({ success: true, data: overview });
  } catch (err: any) {
    console.error('Get appointments overview error:', err);
    res.status(500).json({ error: 'Failed to calculate appointment overview metrics' });
  }
}

// List appointments with search, filter, pagination
export async function getAppointments(req: AdminAuthRequest, res: Response): Promise<void> {
  try {
    const search = req.query.search ? String(req.query.search) : undefined;
    const status = req.query.status ? String(req.query.status) : undefined;
    const date = req.query.date ? String(req.query.date) : undefined;
    const limit = req.query.limit ? Number(req.query.limit) : 50;
    const offset = req.query.offset ? Number(req.query.offset) : 0;

    const result = await adminService.getAppointmentsList({ search, status, date, limit, offset });
    res.status(200).json({
      success: true,
      data: result.appointments,
      total: result.totalCount,
      limit,
      offset,
    });
  } catch (err: any) {
    console.error('Get appointments list error:', err);
    res.status(500).json({ error: 'Failed to fetch appointment records' });
  }
}

// Get single appointment detail
export async function getAppointmentDetail(req: AdminAuthRequest, res: Response): Promise<void> {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: 'Invalid appointment ID' });
      return;
    }

    const appointment = await adminService.getAppointmentById(id);
    if (!appointment) {
      res.status(404).json({ error: 'Appointment not found' });
      return;
    }

    res.status(200).json({ success: true, data: appointment });
  } catch (err: any) {
    console.error('Get appointment detail error:', err);
    res.status(500).json({ error: 'Failed to fetch appointment details' });
  }
}

// Update appointment status
export async function updateAppointmentStatus(req: AdminAuthRequest, res: Response): Promise<void> {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: 'Invalid appointment ID' });
      return;
    }

    const { status } = req.body;
    if (!status) {
      res.status(400).json({ error: 'Status is required' });
      return;
    }

    const updated = await adminService.updateAppointmentStatus(id, String(status));
    if (!updated) {
      res.status(404).json({ error: 'Appointment not found or not modified' });
      return;
    }

    res.status(200).json({
      success: true,
      message: `Appointment #${id} status updated to ${status}`,
    });
  } catch (err: any) {
    console.error('Update appointment status error:', err);
    res.status(400).json({ error: err?.message || 'Failed to update appointment status' });
  }
}
