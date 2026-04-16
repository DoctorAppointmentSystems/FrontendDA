import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Auth
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Patient
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { AppointmentBookComponent } from './components/appointment-book/appointment-book.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';

// Admin
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

// Guard
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  // Default Route
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Auth Routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Patient Routes (Protected)
  {
    path: 'patient',
    canActivate: [authGuard],
    children: [
      { path: 'doctors', component: DoctorListComponent },
      { path: 'doctor/:id', component: DoctorDetailsComponent },
      { path: 'book/:id', component: AppointmentBookComponent },
      { path: 'appointments', component: AppointmentListComponent },
    ],
  },

  // Admin Route
  {
    path: 'admin',
    canActivate: [authGuard],
    component: AdminDashboardComponent,
  },

  // Wildcard Route (Invalid URL)
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
