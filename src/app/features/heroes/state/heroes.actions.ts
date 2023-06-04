import { Hero, PowerStat } from '../interfaces/hero.interface';
import { createAction, props } from '@ngrx/store';

import { HttpErrorResponse } from '@angular/common/http';

export const loadHeroes = createAction('[Heroes] Load heroes list');
export const loadHeroesSuccess = createAction(
  '[Heros] Load heroes list Success',
  props<{ heroes: Hero[] }>()
);

export const loadHeroesFailure = createAction(
  '[Heroes] Load heroes list Failure',
  props<{ payload: HttpErrorResponse }>()
);

export const createHero = createAction(
  '[Heroes] Create hero',
  props<{ hero: Hero }>()
);
export const createHeroSuccess = createAction(
  '[Heroes] Create hero Success',
  props<{ hero: Hero }>()
);

export const createHeroFailure = createAction(
  '[Heroes] Create hero Failure',
  props<{ payload: HttpErrorResponse }>()
);


export const deleteHero = createAction(
  '[Heroe] Delete hero',
  props<{ hero: Hero }>()
);
export const deleteHeroSuccess = createAction(
  '[Hero] Delete hero Success',
  props<{ hero: Hero }>()
);

export const deleteHeroFailure = createAction(
  '[Hero] Delete hero Failure',
  props<{ payload: HttpErrorResponse }>()
);

export const updateHero = createAction(
  '[Hero] Update hero',
  props<{ hero: Hero }>()
);
export const updateHeroSuccess = createAction(
  '[Hero] Update hero Success',
  props<{ hero: Hero }>()
);

export const updateHeroFailure = createAction(
  '[Hero] Update hero Failure',
  props<{ payload: HttpErrorResponse }>()
);

export const updateHeroPowerstat = createAction(
  '[Hero] Update hero powerstat',
  props<{ hero: Hero, powerstat: PowerStat, value: number }>()
);
export const updateHeroPowerstatSuccess = createAction(
  '[Hero] Update hero powerstat Success',
  props<{ hero: Hero, powerstat: PowerStat, value: number }>()
);

export const updateHeroPowerstatFailure = createAction(
  '[Hero] Update hero powerstat Failure',
  props<{ payload: HttpErrorResponse }>()
);
