import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import {
  remove,
  toggle,
  setPriority,
  setTodoList,
} from "./../features/todo/todo.slice";
import { useEffect } from "react";

export default function TodoList() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const toggleTaskComplete = (id) => {
    return () => dispatch(toggle({ id }));
  };

  const deleteTask = (id) => {
    return (e) => {
      e;
      dispatch(remove({ id }));
    };
  };

  const setTaskPriority = (id) => {
    return (e) => {
      dispatch(setPriority({ id, priorityLevel: e.target.value }));
    };
  };

  useEffect(() => {
    const lsUser = JSON.parse(localStorage.getItem("user"));
    const ssUser = JSON.parse(sessionStorage.getItem("user"))

    if (lsUser.username === ssUser.username) {
      dispatch(
        setTodoList({ todoList: JSON.parse(localStorage.getItem("todoList")) })
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  // console.log(todos);

  const list = todos
    ? todos.map((taskItem) => (
        <li key={taskItem.id}>
          <TodoItem
            todo={taskItem}
            clickHandler={deleteTask(taskItem.id)}
            toggleHandler={toggleTaskComplete(taskItem.id)}
            priorityHandler={setTaskPriority(taskItem.id)}
          />
        </li>
      ))
    : "";

  return (
    <>
      <div>{list}</div>
    </>
  );
}
