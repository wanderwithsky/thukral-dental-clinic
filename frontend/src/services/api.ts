const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface AppointmentData {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time?: string;
  treatment?: string;
  message?: string;
}

export interface ContactMessageData {
  name: string;
  phone?: string;
  email?: string;
  subject?: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success?: boolean;
  message?: string;
  error?: string;
  data?: T;
}

export async function submitAppointmentApi(data: AppointmentData): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}/appointments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const json = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(json.error || json.message || `Request failed with status ${response.status}`);
  }

  return json;
}

export async function submitContactApi(data: ContactMessageData): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const json = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(json.error || json.message || `Request failed with status ${response.status}`);
  }

  return json;
}

export async function checkBackendHealth(): Promise<{ status: string; database?: any }> {
  const response = await fetch(`${API_BASE_URL}/health`);
  return response.json();
}

// Admin Dashboard Types & API Services
export interface AdminUser {
  id: number;
  username: string;
  email?: string;
  role: string;
  created_at: string;
}

export interface AdminAppointment {
  id: number;
  patient_name: string;
  phone: string;
  email?: string | null;
  treatment?: string | null;
  preferred_date?: string | null;
  preferred_time?: string | null;
  message?: string | null;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | string;
  created_at: string;
}

export interface AdminOverview {
  total: number;
  pending: number;
  confirmed: number;
  completed: number;
  cancelled: number;
}

export async function adminLoginApi(credentials: { username: string; password: string }): Promise<{ token: string; user: AdminUser }> {
  const response = await fetch(`${API_BASE_URL}/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const json = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(json.error || 'Failed to authenticate');
  }

  return json;
}

export async function adminGetProfileApi(token: string): Promise<AdminUser> {
  const response = await fetch(`${API_BASE_URL}/admin/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(json.error || 'Failed to verify session');
  }

  return json.user;
}

export async function adminGetOverviewApi(token: string): Promise<AdminOverview> {
  const response = await fetch(`${API_BASE_URL}/admin/overview`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(json.error || 'Failed to fetch metrics overview');
  }

  return json.data;
}

export async function adminGetAppointmentsApi(
  token: string,
  params: { search?: string; status?: string; date?: string; limit?: number; offset?: number } = {}
): Promise<{ data: AdminAppointment[]; total: number }> {
  const query = new URLSearchParams();
  if (params.search) query.append('search', params.search);
  if (params.status && params.status !== 'all') query.append('status', params.status);
  if (params.date) query.append('date', params.date);
  if (params.limit) query.append('limit', String(params.limit));
  if (params.offset) query.append('offset', String(params.offset));

  const response = await fetch(`${API_BASE_URL}/admin/appointments?${query.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(json.error || 'Failed to load appointments');
  }

  return {
    data: json.data || [],
    total: json.total || 0,
  };
}

export async function adminUpdateAppointmentStatusApi(
  token: string,
  id: number,
  status: string
): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/admin/appointments/${id}/status`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });

  const json = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(json.error || 'Failed to update status');
  }
}

