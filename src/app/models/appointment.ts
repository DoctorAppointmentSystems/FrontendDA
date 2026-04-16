export interface Appointment {
  appointmentId: number;
  patientId: number;
  doctorId: number;
  appointmentDate: string;
  slotTime: string;
  mode: string;
  status: string;
  consultationFee: number;
}