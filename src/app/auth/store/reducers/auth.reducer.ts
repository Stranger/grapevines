import { AuthActions, AuthActionTypes } from "../actions";
import { UserModel, ErrorModel } from "../../models/user.model";

export interface State {
  user: UserModel;
  loggedIn: boolean;
  error: ErrorModel;
}

export const initialState: State = {
  user: {
    email: null,
    uid: null
  },
  loggedIn: false,
  error: {
    code: null,
    message: null
  }
};

export function reducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthActionTypes.LogInSuccess: {
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        error: {
          code: null,
          message: null
        }
      };
    }

    case AuthActionTypes.LogInFail: {
      return {
        ...state,
        user: {
          email: null,
          uid: null
        },
        loggedIn: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getUser = (state: State) => state.user;
export const getLoggedIn = (state: State) => state.loggedIn;
export const getError = (state: State) => state.error;
