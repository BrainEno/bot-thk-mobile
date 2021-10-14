import { authActionTypes } from "./auth.types";

export interface IUser {
  id: number;
  username: string;
  token: string;
}

interface IAuthState {
  currentUser: null | IUser;
  error: null | any;
  loading: boolean;
}

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const authReducer = (
  state: IAuthState = initialState,
  action: { type: authActionTypes; payload: any }
) => {
  switch (action.type) {
    case authActionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case authActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
