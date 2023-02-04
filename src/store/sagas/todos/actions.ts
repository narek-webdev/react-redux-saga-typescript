import { ActionTypes, GetAction } from "./types";

export const getTodos = (): GetAction => {
  return {
    type: ActionTypes.Get,
  };
};
