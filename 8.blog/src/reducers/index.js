import { combineReducers } from "redux";
import blogsReducer from "./BlogsReducer";
import userReducer from "./UserReducer";

export default combineReducers({
  blogs: blogsReducer,
  users: userReducer,
});
