import { AuthActions, AuthActionsEnum, AuthState } from "./types";

const initialState: AuthState = {
  isAuth: false,
};

export default function authReducer(
  state = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };

    default:
      return state;
  }
}
