import { Action, createReducer, on } from '@ngrx/store';
import { login, loginFailure, loginSuccess, logout, register, registerFailure, registerSuccess } from './auth.actions';

import { AuthLogin } from '../interfaces/auth-login.interface';

export interface AuthState {
  credentials: AuthLogin;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: AuthState = {
  credentials: { username: '', password: ''},
  loading: false,
  loaded: false,
  error: null,
};


export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  const reducer =  createReducer(
    initialState,
    on(login, (state) => ({
      ...state,
      loading: true,
      loaded: false,
      error: null,
    })),
    on(loginSuccess, (state, action) => ({
      ...state,
      credentials: action.credentials,
      loading: false,
      loaded: true,
      error: null,
    })),
    on(loginFailure, (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: { payload },
    })),
    on(register, (state) => ({
      ...state,
      loading: true,
      loaded: false,
      error: null,
    })),
    on(registerSuccess, (state, action) => ({
      ...state,
      loading: false,
      loaded: true,
      error: null,
    })),
    on(registerFailure, (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: { payload },
    })),
    on(logout, () => initialState)
  );
  return reducer(state, action);
}
