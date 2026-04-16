import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class DoctorService {
  baseUrl = 'https://localhost:5001/api/doctors';

  constructor(private http: HttpClient) {}

  getDoctors() {
    return this.http.get(this.baseUrl);
  }

  getDoctor(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}