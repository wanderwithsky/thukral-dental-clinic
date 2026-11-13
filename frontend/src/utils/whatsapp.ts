export const CLINIC_WHATSAPP_NUMBER = '918299719955';

export interface AppointmentWhatsAppDetails {
  name: string;
  phone: string;
  email?: string;
  treatment?: string;
  date: string;
  time: string;
  message?: string;
}

/**
 * Builds the structured WhatsApp appointment message.
 */
export function buildAppointmentWhatsAppMessage(data: AppointmentWhatsAppDetails): string {
  const emailDisplay = data.email && data.email.trim() ? data.email.trim() : 'Not Provided';
  const additionalMessage = data.message && data.message.trim() ? data.message.trim() : 'Not Provided';

  return `*New Appointment Request - Thukral Dental Clinic*

*Patient Name:* ${data.name.trim()}
*Phone Number:* ${data.phone.trim()}
*Email:* ${emailDisplay}
*Treatment / Concern:* ${data.treatment || 'General Checkup'}
*Preferred Date:* ${data.date}
*Preferred Time Slot:* ${data.time}
*Additional Message:* ${additionalMessage}`;
}

/**
 * Generates the full WhatsApp URL with encoded message targeting the clinic number.
 */
export function generateAppointmentWhatsAppUrl(data: AppointmentWhatsAppDetails): string {
  const message = buildAppointmentWhatsAppMessage(data);
  return `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

