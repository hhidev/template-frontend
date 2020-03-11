import { Middleware, Dispatch, Action } from "redux";
import types from "../modules/user/types";
import { IApiResponse } from "./api-executor";

export const AuthorizationStorage: Middleware = () => (
  next: Dispatch<Action>
) =>
  /* eslint-disable @typescript-eslint/camelcase */
  ((action: IApiResponse) => {
    if (action.type === types.LOGIN_SUCCESS) {
      localStorage.access_token = action.headers["access-token"];
      localStorage.uid = action.headers["uid"];
      localStorage.client = action.headers["client"];
      next(action);
    } else if (
      action.type === types.LOGOUT_SUCCESS ||
      action.type === types.AUTHORIZE_FAILED
    ) {
      localStorage.removeItem("access_token");
      next(action);
    } else {
      next(action);
    }
  }) as Dispatch<Action>;
