import * as AuthActions from './auth.actions';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable, inject } from "@angular/core";
import { catchError, exhaustMap, map, of, tap } from "rxjs";

import { AuthService } from "../services/auth.services";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(({ credentials }) =>
        this.authService.login(credentials).pipe(
          map(({token}) => AuthActions.loginSuccess({ token, credentials })),
          catchError(error => of(AuthActions.loginFailure({ payload: error }))),
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        map(({ token }) => localStorage.setItem('user-token', token)),
        tap(() =>  this.router.navigateByUrl('/hero'))),
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginFailure),
        map(( { payload }) => alert(payload.error.msg))
      ),
    { dispatch: false }
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      exhaustMap(({ credentials }) =>
        this.authService.register(credentials).pipe(
          map(() => AuthActions.registerSuccess({ credentials })),
          catchError(error => of(AuthActions.registerFailure({ payload: error }))),
        )
      )
    )
  );

  registerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.registerSuccess),
        map(() => this.router.navigateByUrl('/auth/login'))),
    { dispatch: false }
  );

  registerFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.registerFailure),
        map(( { payload }) => alert(payload.error.msg))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        map( () => localStorage.clear())
      ),
    { dispatch: false }
  );

}
