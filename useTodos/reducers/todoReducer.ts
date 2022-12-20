import { Todo } from "../types/Todo";

export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    case "[TODO] Remove Todo":
      return initialState.filter((todo: Todo) => todo.id !== action.payload);

    case "[TODO] Toggle Todo":
      return initialState.filter((todo: Todo) => {
        if (todo.id === action.payload) todo.done = !todo.done;

        return todo;
      });

    default:
      return initialState;
  }
};
