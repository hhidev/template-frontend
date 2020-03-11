import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { AuthorizationStorage } from "./middleware/authorization-storage";
import * as reducers from "./modules";

const rootReducer = combineReducers(reducers);
export type RootStore = ReturnType<typeof rootReducer>;

const Index = () => {
  if (process.env.NODE_ENV === "production") {
    return createStore(
      rootReducer,
      applyMiddleware(thunk, AuthorizationStorage)
    );
  }
  if (process.env.NODE_ENV === "development") {
    return createStore(
      rootReducer,
      applyMiddleware(logger, thunk, AuthorizationStorage)
    );
  }
};

export default Index;
