import { Request, Response } from 'express';
import { testDbConnection } from '../config/database';
import * as clinicService from '../services/clinicService';

export async function healthCheck(req: Request, res: Response): Promise<void> {
  const dbStatus = await testDbConnection();
  res.status(dbStatus.connected ? 200 : 503).json({
    status: dbStatus.connected ? 'healthy' : 'unhealthy',
    timestamp: new Date().toISOString(),
    database: {
      driver: 'mysql2',
      ...dbStatus,
    },
  });
}

export async function submitAppointment(req: Request, res: Response): Promise<void> {
  try {
    const { name, patient_name, phone, date, preferred_date, time, preferred_time, email, treatment, message } = req.body;
    const finalName = (name || patient_name || '').trim();
    const finalPhone = (phone || '').trim();
    const finalDate = (date || preferred_date || '').trim();

    if (!finalName) {
      res.status(400).json({ error: 'Name is required' });
      return;
    }

    if (!finalPhone) {
      res.status(400).json({ error: 'Phone number is required' });
      return;
    }

    if (!finalDate) {
      res.status(400).json({ error: 'Preferred date is required' });
      return;
    }

    const result = await clinicService.createAppointment({
      name: finalName,
      phone: finalPhone,
      date: finalDate,
      time: time || preferred_time ? String(time || preferred_time).trim() : undefined,
      email: email ? String(email).trim() : undefined,
      treatment: treatment ? String(treatment).trim() : undefined,
      message: message ? String(message).trim() : undefined,
    });

    res.status(201).json({
      success: true,
      message: 'Appointment request received successfully',
      data: result,
    });
  } catch (error: any) {
    console.error('Error submitting appointment:', error);
    res.status(500).json({
      error: 'Failed to save appointment request',
      details: error?.message || 'Database error',
    });
  }
}

export async function submitContact(req: Request, res: Response): Promise<void> {
  try {
    const { name, phone, email, subject, message } = req.body;

    if (!name || typeof name !== 'string' || !name.trim()) {
      res.status(400).json({ error: 'Name is required' });
      return;
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    const result = await clinicService.createContactMessage({
      name: name.trim(),
      phone: phone ? String(phone).trim() : undefined,
      email: email ? String(email).trim() : undefined,
      subject: subject ? String(subject).trim() : undefined,
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      message: 'Contact message received successfully',
      data: result,
    });
  } catch (error: any) {
    console.error('Error submitting contact message:', error);
    res.status(500).json({
      error: 'Failed to save contact message',
      details: error?.message || 'Database error',
    });
  }
}
