import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./../features/todo/todo.slice";
import AuthReducer from "./../features/authentication/auth.slice";

export const store = configureStore({
  reducer: { todos: TodoReducer, auth: AuthReducer },
});
