import { Component, inject } from '@angular/core';

import { AuthLogin } from '../../interfaces/auth-login.interface';
import { AuthService } from '../../services/auth.services';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private readonly userService = inject(AuthService);
  private readonly  router = inject(Router);
  public errorMessage = "";

  login(login: AuthLogin){
    this.userService.login(login).subscribe({
      next: () => this.router.navigate(['/hero']),
      error: ({ error }) => this.errorMessage = error.msg,
    });
  }

}
