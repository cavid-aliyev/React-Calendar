import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
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
        setTimeout(async () => {
          const response = await UserService.getUsers();
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );

          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            dispatch(AuthActionsCreators.setUser(mockUser));
            dispatch(AuthActionsCreators.setIsAuth(true));
          } else {
            dispatch(
              AuthActionsCreators.setError("Incorrect username or pass")
            );
          }
          dispatch(AuthActionsCreators.setIsLoading(false));
        }, 1000);
      } catch (e) {
        dispatch(AuthActionsCreators.setError("Error in login process"));
      }
    },

  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(AuthActionsCreators.setUser({} as IUser));
    dispatch(AuthActionsCreators.setIsAuth(false));
  },
};
