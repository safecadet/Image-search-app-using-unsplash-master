import { combineReducers } from "redux";
import imageReducer from "./imageReducer";
import searchbarReducer from "./searchbarReducer";

export default combineReducers({
  image: imageReducer,
  search: searchbarReducer,
  //   error: errorReducer,
});
