import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  totalDoctors: number = 0;
  totalAppointments: number = 0;
  todayAppointments: number = 0;

  appointments: any[] = [];

  constructor(
    private doctorService: DoctorService,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard() {
    // Load doctors count
    this.doctorService.getDoctors().subscribe((res: any) => {
      this.totalDoctors = res.length;
    });

    // Load appointments
    this.appointmentService.getMyAppointments().subscribe((res: any) => {
      this.appointments = res;
      this.totalAppointments = res.length;

      const today = new Date().toISOString().split('T')[0];

      this.todayAppointments = res.filter(
        ( a: any) => a.appointmentDate === today
      ).length;
    });
  }
}
