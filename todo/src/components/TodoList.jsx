import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  let todos = useSelector((state) => state.todos);

  return (
    <div>
      <ul>
        {todos.map((todo,index) => (
         <TodoItem key={index} todo={todo}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
