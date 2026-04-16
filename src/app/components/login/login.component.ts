import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  model = {
    email: '',
    password: '',
  };

  isLoading = false;
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.isLoading = true;
    this.errorMessage = '';

    this.auth.login(this.model).subscribe({
      next: (res: any) => {
        this.auth.setToken(res.token);
        this.router.navigate(['/patient/doctors']);
      },
      error: () => {
        this.errorMessage = 'Invalid email or password';
        this.isLoading = false;
      },
    });
  }
}
