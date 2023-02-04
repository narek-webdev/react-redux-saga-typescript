import { call, put, takeLatest } from "redux-saga/effects";
import { getTodosApi } from "./api";
import { setTodos } from "../../reducer/todos/actions";
import { ActionTypes } from "./types";

export function* getTodos() {
  const { data } = yield call(getTodosApi);

  yield put(setTodos(data));
}

export function* watchTodos() {
  yield takeLatest(ActionTypes.Get, getTodos);
}
