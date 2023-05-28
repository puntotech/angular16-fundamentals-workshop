import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public message = '';
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const login = this.loginForm.value;
    this.userService.login(login).subscribe(
      resp => {
        console.log('Successfully logged in');
        this.message = resp.msg;
      },
      err => {
        console.error('Error logging in', err);
        this.message = err.error.msg;
      },
    );
  }
}
