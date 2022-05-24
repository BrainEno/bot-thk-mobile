import type { AnyAction } from 'redux';

import type { User } from '../../graphql/types';

import {
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
} from './auth.types';

export type UserInfo = Pick<User, 'username' | 'userRole' | 'avatar'>;

export interface AuthState {
  currentUser: UserInfo | null;
  error: string | null;
  loading: boolean;
}

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const authReducer = (
  state: AuthState = initialState,
  action: AnyAction
): AuthState => {
  switch (action.type) {
    case LOGIN_START:
    case LOGOUT_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: null,
      };
    case LOGOUT_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
