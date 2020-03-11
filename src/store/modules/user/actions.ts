import types from "./types";
import { authorization, ApiExecutor } from "../../middleware/api-executor";
import { IUser } from "./model";

export interface LoginInfo {
  email: string;
  password: string;
}

export const login = (data: LoginInfo) =>
  ApiExecutor<IUser>({
    type: types.LOGIN,
    method: "post",
    url: "/auth/sign_in",
    headers: {
      "Content-Type": "application/json"
    },
    data
  });

export const getCurrentUser = () =>
  ApiExecutor<IUser>({
    type: types.AUTHORIZE,
    method: "get",
    url: "/users/show_by_token",
    headers: authorization()
  });

export const logout = () =>
  ApiExecutor<IUser>({
    type: types.LOGOUT,
    url: "/auth/sign_out",
    method: "delete",
    headers: authorization()
  });
