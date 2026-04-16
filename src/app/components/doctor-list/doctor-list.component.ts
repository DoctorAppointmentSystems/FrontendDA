import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
})
export class DoctorListComponent implements OnInit {
  doctors: any[] = [];
  searchText = '';

  constructor(private service: DoctorService) {}

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors() {
    this.service.getDoctors().subscribe((res: any) => {
      this.doctors = res;
    });
  }
}
