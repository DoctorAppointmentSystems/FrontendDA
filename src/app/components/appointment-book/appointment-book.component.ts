import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-appointment-book',
  templateUrl: './appointment-book.component.html',
})
export class AppointmentBookComponent implements OnInit {
  doctorId!: number;
  doctor: any;

  appointment: any = {
    appointmentDate: '',
    slotTime: '',
    mode: 'Online',
  };

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['id'];

    // Load doctor details
    this.doctorService.getDoctor(this.doctorId).subscribe((res) => {
      this.doctor = res;
    });
  }

  bookAppointment() {
    if (!this.appointment.appointmentDate || !this.appointment.slotTime) {
      this.errorMessage = 'Please select date and time';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const payload = {
      ...this.appointment,
      doctorId: this.doctorId,
    };

    this.appointmentService.book(payload).subscribe({
      next: () => {
        this.successMessage = 'Appointment booked successfully!';
        this.isSubmitting = false;

        // redirect after 2 sec
        setTimeout(() => {
          this.router.navigate(['/patient/appointments']);
        }, 2000);
      },
      error: () => {
        this.errorMessage = 'Booking failed. Try again.';
        this.isSubmitting = false;
      },
    });
  }
}
