import { ActionTypes, Actions, Todo } from "./types";

const initialState: Todo[] = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false },
  { id: 2, text: "Build something fun!", completed: false },
];

export const todoReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.Insert:
      return [...state, { ...action.payload, completed: false }];
    default:
      return state;
  }
};
