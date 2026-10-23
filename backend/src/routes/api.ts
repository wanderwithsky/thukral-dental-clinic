import { Router } from 'express';
import { healthCheck, submitAppointment, submitContact } from '../controllers/clinicController';

const router = Router();

// Health check endpoint
router.get('/health', healthCheck);

// Appointment booking endpoint
router.post('/appointments', submitAppointment);

// Contact message endpoint
router.post('/contact', submitContact);

export default router;
