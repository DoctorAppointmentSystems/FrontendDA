import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppointmentBookComponent } from './components/appointment-book/appointment-book.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AppointmentBookComponent,
    DoctorListComponent,
    DoctorDetailsComponent,
    AppointmentListComponent,
    AdminDashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
