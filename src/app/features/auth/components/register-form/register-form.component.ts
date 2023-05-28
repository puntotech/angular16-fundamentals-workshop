import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthLogin } from '../../interfaces/auth-login.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  @Output() sendRegister: EventEmitter<any> = new EventEmitter();
  private readonly fb = inject(FormBuilder);
  public message = '';

  public registerForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });


  register() {
    if(this.registerForm.invalid){
      this.message = "Please correct all errors and resubmit the form";
    }else{
      const register: AuthLogin  = this.registerForm.value;
      this.sendRegister.emit(register);
    }
  }
}
