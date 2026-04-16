import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
})
export class AppointmentListComponent implements OnInit {
  appointments: any[] = [];

  constructor(private service: AppointmentService) {}

  ngOnInit(): void {
    this.service.getMyAppointments().subscribe((res: any) => {
      this.appointments = res;
    });
  }
}
