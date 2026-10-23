export interface AppointmentPayload {
  name: string;
  phone: string;
  date: string;
  time?: string;
  email?: string;
  treatment?: string;
  message?: string;
}

export interface ContactMessagePayload {
  name: string;
  phone?: string;
  email?: string;
  subject?: string;
  message: string;
}
