import React, { use } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../actions";

const TodoItem = ({ todo }) => {
  let dispatch = useDispatch();
  return (
    <div>
      <li>
        <span>{todo.text}</span>
        <button
          onClick={() => {
            dispatch(removeTodo(todo.id));
          }}
        >
          Remove
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
