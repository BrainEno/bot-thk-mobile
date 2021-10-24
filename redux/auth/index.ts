import { Roles } from "../../graphql/types";
import { authActionTypes } from "./auth.types";

export interface UserInfo {
  username: string;
  userRole: Roles;
  avatar: string;
}

interface AuthState {
  currentUser: null | UserInfo;
  error: null | string;
  loading: boolean;
}

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const authReducer = (
  state: AuthState = initialState,
  action: { type: authActionTypes; payload: any }
) => {
  switch (action.type) {
    case authActionTypes.LOGIN_START:
    case authActionTypes.LOGOUT_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null,
      };
    case authActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: null,
      };
    case authActionTypes.LOGOUT_FAILURE:
    case authActionTypes.LOGIN_FAILURE:
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
