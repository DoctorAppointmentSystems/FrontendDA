import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanActivate, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  model: any = {
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
  };

  success = '';

  constructor(private auth: AuthService) {}

  register() {
    this.auth.register(this.model).subscribe(() => {
      this.success = 'Registration successful!';
    });
  }
}
