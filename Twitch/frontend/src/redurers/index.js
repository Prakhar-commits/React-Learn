import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import { reducer as FormReducer } from "redux-form";
import StreamReducer from "./StreamReducer";

export default combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  streams: StreamReducer,
});
