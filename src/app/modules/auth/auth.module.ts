import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@NgModule({
  declarations: [],
  imports: [CommonModule],
})
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router:  Router) {}

  canActivate(): boolean {
    if (!this.auth.getToken()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}