import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
})
export class DoctorDetailsComponent implements OnInit {
  doctor: any;
  appointment: any = {
    appointmentDate: '',
    slotTime: '',
    mode: 'Online',
  };

  success = '';

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.doctorService.getDoctor(id).subscribe((res) => {
      this.doctor = res;
    });
  }

  book() {
    this.appointment.doctorId = this.doctor.doctorId;

    this.appointmentService.book(this.appointment).subscribe(() => {
      this.success = 'Appointment Booked Successfully!';
    });
  }
}
