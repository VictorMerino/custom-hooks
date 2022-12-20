import { Todo } from "../types";

export const initialState: Todo[] = [
  {
    id: new Date().getTime(),
    description: "Do the laundry",
    done: false,
  },
  {
    id: new Date().getTime() + 1,
    description: "Go shopping",
    done: false,
  },
];
