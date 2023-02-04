import { all, fork } from "redux-saga/effects";
import { watchTodos } from "./todos/saga";

export function* rootSaga() {
  yield all([fork(watchTodos)]);
}
