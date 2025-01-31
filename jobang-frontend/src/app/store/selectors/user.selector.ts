import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<State>('user');

export const selectUser = createSelector(
  selectUserState,
  (state) => state.user
);

export const selectUserError = createSelector(
  selectUserState,
  (state) => state.error
);