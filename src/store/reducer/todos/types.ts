export interface Todo {
  id: number;
  text: string;
  completed?: boolean;
}

export enum ActionTypes {
  Insert = "TODOS_INSERT",
}

export interface InsertAction {
  type: ActionTypes.Insert;
  payload: Todo;
}

export type Actions = InsertAction;
