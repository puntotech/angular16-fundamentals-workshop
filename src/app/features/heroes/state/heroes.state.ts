import { Action, createReducer, on } from '@ngrx/store';
import { createHero, createHeroFailure, createHeroSuccess, deleteHero, deleteHeroFailure, deleteHeroSuccess, loadHeroes, loadHeroesFailure, loadHeroesSuccess } from './heroes.actions';

import { Hero } from '../interfaces/hero.interface';

export interface HeroesState {
  ids: number[];
  entities: { [id: number]: Hero };
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: HeroesState = {
  ids: [],
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export function heroesReducer(
  state: HeroesState | undefined,
  action: Action
): HeroesState
 {
  const reducer = createReducer(
  initialState,
  on(loadHeroes, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(loadHeroesSuccess, (state, action) => ({
    ...state,
    entities: action.heroes.reduce((heroes, hero) => ({ ...heroes, [hero.id]: hero }), {}),
    ids: action.heroes.map(hero => hero.id),
    loading: false,
    loaded: true,
    error: null,
  })),
  on(loadHeroesFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
  on(createHero, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(createHeroSuccess, (state, action) => ({
    ...state,
    entities: {
      ...state.entities,
      [action.hero.id]: action.hero,
    },
    loading: false,
    loaded: true,
    error: null,
  })),
  on(createHeroFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
  on(deleteHero, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(deleteHeroSuccess, (state, { hero }) => {
    const entities = {...state.entities};
    delete entities[hero.id];
    const ids = [...state.ids].filter(id => id !== hero.id);

    return {
      ...state,
      entities,
      ids,
      loading: false,
      loaded: true,
      error: null,
    }
  })
  ,
  on(deleteHeroFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
);
  return reducer(state, action);
}

