import { createReducer, on } from '@ngrx/store';
import { loadUserSuccess, loadUserFailure } from '../actions/user.actions';


// Define the initial state of the user
export interface State {
    user:  null;
    error: string | null;
  }
  
  export const initialState: State = {
    user: null,
    error: null,
  };
  
  export const userReducer = createReducer(
    initialState,
    on(loadUserSuccess, (state, { user }) => ({
      ...state,
      user,
      error: null,
    })),
    on(loadUserFailure, (state, { error }) => ({
      ...state,
      user: null,
      error,
    }))
  );