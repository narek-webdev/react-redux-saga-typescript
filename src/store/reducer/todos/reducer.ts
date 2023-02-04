import { ActionTypes, Actions, Todo } from "./types";

const initialState: Todo[] = [];

export const todoReducer = (
  state = initialState,
  { payload, type }: Actions
) => {
  switch (type) {
    case ActionTypes.Insert:
      return [...state, { ...payload, completed: false }];
    case ActionTypes.Delete:
      return state.filter(({ id }) => id !== payload);
    case ActionTypes.Set:
      return [...state, ...payload];
    default:
      return state;
  }
};
