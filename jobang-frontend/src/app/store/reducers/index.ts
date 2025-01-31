import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './user.reducer';

export interface State {

  // other state properties
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  // other reducers
};