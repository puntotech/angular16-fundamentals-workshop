import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthLogin } from '../../interfaces/auth-login.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() sendLogin: EventEmitter<any> = new EventEmitter();
  private readonly fb = inject(FormBuilder);
  public message = "";

  public loginForm: FormGroup =  this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  login() {
    if(this.loginForm.invalid){
      this.message = "Please correct all errors and resubmit the form";
    }else{
      const login: AuthLogin = this.loginForm.value;
      this.sendLogin.emit(login);
    }
  }
}
