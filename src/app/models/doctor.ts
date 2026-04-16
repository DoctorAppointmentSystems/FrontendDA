export interface Doctor {
  doctorId: number;
  doctorName: string;
  email: string;
  phone: string;
  specialtyId: number;
  experienceYears: number;
  consultationFeeOnline: number;
  consultationFeeOffline: number;
  clinicAddress: string;
  isActive: boolean;
}