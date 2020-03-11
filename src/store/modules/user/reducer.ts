import types from "./types";
import User from "./model";
import { ApiResponse } from "../../middleware/api-executor";

const UserReducer = (state: User = new User(), action: ApiResponse) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.AUTHORIZE_SUCCESS:
      return User.fromJS(action.data);
    case types.LOGOUT_SUCCESS:
    case types.AUTHORIZE_FAILED:
      return new User();
    default:
      return state;
  }
};

export default UserReducer;

// TODO apiExecute reducerをつくる
