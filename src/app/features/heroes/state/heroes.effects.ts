import * as HeroesActions from '../state/heroes.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { HeroService } from '../services/hero.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Injectable()
export class HeroesEffects {
  private readonly actions$ = inject(Actions);
  private readonly heroService = inject(HeroService);
  private readonly router = inject(Router)

  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesActions.loadHeroes),
      exhaustMap(() =>
        this.heroService.findAll().pipe(
          map(heroes => HeroesActions.loadHeroesSuccess({ heroes }),
          catchError((error) => of(HeroesActions.loadHeroesFailure({ payload: error })))
          )
        )
      )
    )
  );

  loadHeroesFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HeroesActions.loadHeroesFailure),
        map(() =>  map(( { payload }) => alert(payload.error.msg)))
      ),
    { dispatch: false }
  );

  createHero$ = createEffect(() =>
  this.actions$.pipe(
    ofType(HeroesActions.createHero),
    exhaustMap(({ hero }) =>
      this.heroService.add(hero).pipe(
        map((hero) => HeroesActions.createHeroSuccess({ hero })),
        catchError((error) => of(HeroesActions.createHeroFailure({ payload: error }))),
      )
    )
  )
);


  createHeroSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(HeroesActions.createHeroSuccess),
        map(() => this.router.navigate(['/hero']))
      ),
    { dispatch: false }
  );

  createHeroFailure$ = createEffect(() =>
        this.actions$.pipe(
          ofType(HeroesActions.createHeroFailure),
          map((error) => alert(error.payload.message))),
    { dispatch: false });

    deleteHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesActions.deleteHero),
      exhaustMap(({ hero }) =>
        this.heroService.delete(hero).pipe(
          map(() => HeroesActions.deleteHeroSuccess({ hero })),
          catchError((error) => of(HeroesActions.deleteHeroFailure({ payload: error })))
        )
      )
    )
  );

  deleteHeroFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HeroesActions.deleteHeroFailure),
        map((error) => alert(error.payload.error))
      ),
    { dispatch: false }
  );

  updateHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesActions.updateHero),
      exhaustMap(({ hero }) =>
        this.heroService.update(hero).pipe(
          map(() => HeroesActions.updateHeroSuccess({ hero })),
          catchError((error) => of(HeroesActions.updateHeroFailure({ payload: error }))),
        )
      )
    )
  );

  updateHeroSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HeroesActions.updateHeroSuccess),
        map(() => this.router.navigate(['/hero']))
      ),
    { dispatch: false }
  );

  updateHeroFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HeroesActions.updateHeroFailure),
        map((error) => alert(error.payload.error))
      ),
    { dispatch: false }
  );

  updateHeroPowerstat$ = createEffect(() =>
  this.actions$.pipe(
    ofType(HeroesActions.updateHeroPowerstat),
    exhaustMap(({ hero, powerstat, value }) =>
      this.heroService.updatePowerstat(hero, powerstat, value).pipe(
        map(() => HeroesActions.updateHeroPowerstatSuccess({ hero, powerstat, value })),
        catchError((error) => of(HeroesActions.updateHeroPowerstatFailure({ payload: error }))),
        )
      )
    )
  );

  updateHeroPowerstatFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HeroesActions.updateHeroPowerstatFailure),
        map((error) => alert(error.payload.error))
      ),
    { dispatch: false }
  );
}

