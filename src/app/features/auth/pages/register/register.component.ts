import { Component, inject } from '@angular/core';

import { AuthLogin } from '../../interfaces/auth-login.interface';
import { AuthService } from '../../services/auth.services';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private readonly  router = inject(Router);
  public errorMessage = "";

  register(login: AuthLogin){

    this.authService.register(login).subscribe({
      next: () => this.router.navigate(['/auth/login']),
      error: ({ error }) => this.errorMessage = error.msg,
    });
  }
}
