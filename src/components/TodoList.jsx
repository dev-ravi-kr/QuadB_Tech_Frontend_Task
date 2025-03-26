import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const {todos} = useSelector((state) => state.todos);

  console.log(todos);

  const list = todos
    ? todos.map((task) => (
        <li key={task.id}>
          <TodoItem todo={task} />
        </li>
      ))
    : "";

  return (
    <>
      <div>{list}</div>
    </>
  );
}
