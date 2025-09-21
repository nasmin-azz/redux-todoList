import { use, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
const TodoAdderForm = () => {
  let [text, setText] = useState("");
  let dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(text));
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoAdderForm;
