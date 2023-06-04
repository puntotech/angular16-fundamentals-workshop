import { createAction, props } from '@ngrx/store';

import { Hero } from '../interfaces/hero.interface';
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
