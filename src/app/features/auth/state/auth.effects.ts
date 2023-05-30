import * as AuthActions from './auth.actions';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable, inject } from "@angular/core";
import { catchError, exhaustMap, map, of } from "rxjs";

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
          map(() => AuthActions.loginSuccess({ credentials })),
          catchError(error => of(AuthActions.loginFailure({ payload: error }))),
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        map(() => this.router.navigateByUrl('/hero'))),
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
}
