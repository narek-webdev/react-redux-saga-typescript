export interface Todo {
  id: number;
  title: string;
}

export enum ActionTypes {
  Insert = "TODOS_INSERT",
  Delete = "TODOS_DELETE",
  Set = "TODOS_SET",
  Get = "GET_TODOS",
}

export interface SetAction {
  type: ActionTypes.Set;
  payload: Todo[];
}
export interface InsertAction {
  type: ActionTypes.Insert;
  payload: Todo;
}

export interface DeleteAction {
  type: ActionTypes.Delete;
  payload: Todo["id"];
}

export type Actions = InsertAction | DeleteAction | SetAction;
