import { combineReducers } from "redux";

import { todoReducer } from "./todos/reducer";

export default combineReducers({
  todos: todoReducer,
});
