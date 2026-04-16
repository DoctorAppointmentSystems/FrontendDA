import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class AppointmentService {
  baseUrl = 'https://localhost:5001/api/appointments';

  constructor(private http: HttpClient) {}

  book(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  getMyAppointments() {
    return this.http.get(`${this.baseUrl}/patient`);
  }
}
