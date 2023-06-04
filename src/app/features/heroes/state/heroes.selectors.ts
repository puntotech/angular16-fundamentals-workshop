import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HeroesState } from './heroes.state';

export const featureKey = 'heroes';

export const selectHeroesState = createFeatureSelector<HeroesState>(featureKey);

export const selectHeroes = createSelector(
  selectHeroesState,
  (state: HeroesState) => Object.values(state.entities),
);

