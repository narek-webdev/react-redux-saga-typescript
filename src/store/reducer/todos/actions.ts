import { ActionTypes, InsertAction, Todo } from "./types";

export const insertTodo = (todo: Todo): InsertAction => {
  return {
    type: ActionTypes.Insert,
    payload: todo,
  };
};
