import  * as AuthAction  from '../../state/auth.actions';
import * as AuthSelector from  '../../state/auth.selectors';

import { Component, inject } from '@angular/core';

import { AuthLogin } from '../../interfaces/auth-login.interface';
import { AuthService } from '../../services/auth.services';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private readonly store = inject(Store);
  public errorMessage$ = this.store.select(AuthSelector.selectError);;

  login(credentials: AuthLogin){
    this.store.dispatch(AuthAction.login({ credentials }));
  }

}
