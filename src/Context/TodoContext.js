import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo mg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id,todo) => {},
  updateTodo: (id) => {},
  toggleTodo: (id) =>{}
});


export const useTodo = ()=> useContext(TodoContext)

export const TodoProvider = TodoContext.Provider
