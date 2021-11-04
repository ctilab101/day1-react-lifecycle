import { combineReducers } from "redux";

// state management with storage
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// app reducers lists.
import todoReducer from "./Todo/TodoReducer";

const persisConfig = {
  key: "root",
  storage,
  whitelist: [],
};

// @dev Create app reducers.
// aliasName : reducer object
const appReducer = combineReducers({
  todo: todoReducer,
});

// @tips Clear state on store after user sing-out
const rootReducer = (state, action) => {
  if (action.type === "SIGN_OUT_SUCCESS") {
    storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default persistReducer(persisConfig, rootReducer);
