import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Msg",
      completed: false,
    },
  ],
  addToDo: (todo) => {},
  updateToDo: (id, todo) => {},
  deleteToDo: (id) => {},
  tooggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(ToDoContext);
};
export const TodoProvidier = ToDoContext.Provider;
