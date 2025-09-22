import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "REMOVE_TODO": {
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { ...state, todos: updatedTodos };
    }
    case "ADD_TODO": {
      const newTodo = { id: uuidv4(), text: action.payload };
      const newTodosList = [...state.todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(newTodosList));
      return { ...state, todos: newTodosList };
    }
    default:
      return state;
  }
}
