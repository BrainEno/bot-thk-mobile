import { Roles } from "../../graphql/types";
import { authActionTypes } from "./auth.types";

export interface UserInfo {
  username: string;
  userRole: Roles;
  avatar: string;
}

interface AuthState {
  currentUser: null | UserInfo;
  error: null | any;
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
