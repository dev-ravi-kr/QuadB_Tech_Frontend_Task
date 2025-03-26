// import React from "react";
import TodoList from "./../components/TodoList";
import TodoForm from "./../components/TodoForm";
import Logout from "../components/Logout";

export default function Tasks() {
  return (
    <>
      <div>Tasks</div>
      <Logout />
      <TodoList />
      <TodoForm />
    </>
  );
}
