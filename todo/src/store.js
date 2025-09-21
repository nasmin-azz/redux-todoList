import { createStore } from "redux";
import { todoReducer } from "./todoReducer";

let store = createStore(todoReducer);
export default store;


import { v4 as uuidv4 } from "uuid";

let initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_TODO":
      let updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };

    case "ADD_TODO":
      let newTodo = { id: uuidv4(), text: action.payload };
      let newTodosList = [...state.todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(newTodosList));
      return {
        ...state,
        todos: newTodosList,
      };
    default:
      return state;
  }
};
