import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth.state';

export const featureKey = 'auth';


export const selectAuth = createFeatureSelector<AuthState>(featureKey);

export const selectError = createSelector(
  selectAuth,
  (state: AuthState) => state.error
);
