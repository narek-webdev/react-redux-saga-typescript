export enum ActionTypes {
  Get = "GET_TODOS",
}

export interface GetAction {
  type: ActionTypes.Get;
}
