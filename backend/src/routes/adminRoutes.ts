import { Router } from 'express';
import {
  adminLogin,
  getAdminProfile,
  getAppointmentsOverview,
  getAppointments,
  getAppointmentDetail,
  updateAppointmentStatus,
} from '../controllers/adminController';
import { requireAdminAuth } from '../middleware/authMiddleware';

const router = Router();

// Public admin authentication endpoint
router.post('/login', adminLogin);

// Protected admin endpoints (require Bearer JWT)
router.get('/me', requireAdminAuth, getAdminProfile);
router.get('/overview', requireAdminAuth, getAppointmentsOverview);
router.get('/appointments', requireAdminAuth, getAppointments);
router.get('/appointments/:id', requireAdminAuth, getAppointmentDetail);
router.patch('/appointments/:id/status', requireAdminAuth, updateAppointmentStatus);

export default router;
