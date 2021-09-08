import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import {
  AuthActionsEnum,
  SetUserAction,
  SetAuthAction,
  SetIsLoadingAction,
  SetErrorAction,
} from "./types";

export const AuthActionsCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (loading: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload: loading,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload: error,
  }),

  //async action-creators
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionsCreators.setIsLoading(true));
        const mockUsers = await axios.get("./users.json");
        console.log(mockUsers);
      } catch (e) {
        dispatch(AuthActionsCreators.setError("Error in login process"));
      }
    },

  logout: () => async (dispatch: AppDispatch) => {
    try {
    } catch (e) {}
  },
};
