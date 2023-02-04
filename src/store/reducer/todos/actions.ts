import {
  ActionTypes,
  DeleteAction,
  InsertAction,
  SetAction,
  Todo,
} from "./types";

export const setTodos = (todo: Todo[]): SetAction => {
  return {
    type: ActionTypes.Set,
    payload: todo,
  };
};

export const insertTodo = (todo: Todo): InsertAction => {
  return {
    type: ActionTypes.Insert,
    payload: todo,
  };
};

export const deleteTodo = (id: Todo["id"]): DeleteAction => {
  return {
    type: ActionTypes.Delete,
    payload: id,
  };
};
