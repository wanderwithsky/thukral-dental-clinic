import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import adminRoutes from './routes/adminRoutes';
import { testDbConnection } from './config/database';
import { initializeAdminTable } from './services/adminService';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for frontend requests
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';
app.use(cors({
  origin: [corsOrigin, 'http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
}));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API routes
app.use('/api', apiRoutes);
app.use('/api/admin', adminRoutes);

// Root greeting endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Thukral Dental & Aesthetic Clinic API',
    status: 'online',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      appointments: 'POST /api/appointments',
      contact: 'POST /api/contact',
      admin: '/api/admin',
    },
  });
});

// Start server
app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  const dbStatus = await testDbConnection();
  if (dbStatus.connected) {
    console.log(`[Database] Connected to MySQL database "${process.env.DB_NAME || 'thukral_clinic'}" successfully.`);
    try {
      await initializeAdminTable();
    } catch (err: any) {
      console.error('[Admin] Error initializing admin table:', err?.message);
    }
  } else {
    console.warn(`[Database] MySQL Connection warning: ${dbStatus.message}`);
    console.warn(`[Database] Please ensure MySQL server is running and DB_PASSWORD in backend/.env is set.`);
  }
});

export default app;
