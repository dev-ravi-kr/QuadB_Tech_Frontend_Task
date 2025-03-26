import { useDispatch } from "react-redux";
import { add } from "./../features/todo/todo.slice";
import { useState } from "react";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const payload = { todoText: input };
    dispatch(add(payload));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">add task</button>
      </form>
    </div>
  );
}
