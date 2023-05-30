import  * as AuthAction  from '../../state/auth.actions';
import * as AuthSelector from  '../../state/auth.selectors';

import { Component, inject } from '@angular/core';

import { AuthLogin } from '../../interfaces/auth-login.interface';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private readonly store = inject(Store);

  public errorMessage$ = this.store.select(AuthSelector.selectError);

  register(credentials: AuthLogin){
    this.store.dispatch(AuthAction.register({ credentials }));

/*     this.authService.register(login).subscribe({
      next: () => this.router.navigate(['/auth/login']),
      error: ({ error }) => this.errorMessage = error.msg,
    }); */
  }
}
