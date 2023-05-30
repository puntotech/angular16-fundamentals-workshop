import { createAction, props } from '@ngrx/store';

import { AuthLogin } from '../interfaces/auth-login.interface';
import { HttpErrorResponse } from '@angular/common/http';

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: AuthLogin }>()
);

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ credentials: AuthLogin }>()
);

export const loginFailure = createAction(
  '[Login Page] Login Failure',
  props<{ payload: HttpErrorResponse }>()
);

export const register = createAction(
  '[Register Page] Register',
  props<{ credentials: AuthLogin }>()
);

export const registerSuccess = createAction(
  '[Register Page] Register Success',
  props<{ credentials: AuthLogin }>()
);

export const registerFailure = createAction(
  '[Register Page] Register Failure',
  props<{ payload: HttpErrorResponse }>()
);

export const logout = createAction('[Login Page] Logout');
