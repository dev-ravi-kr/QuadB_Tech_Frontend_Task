import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Login from "./pages/Login";

export default function App() {
  const { user } = useSelector((state) => {
    // console.log(state.auth);
    return state.auth;
  });
  console.log(user);

  return (
    <>
      <div>
        <h1>Hello World!</h1>
        {user ? (
          <>
            <TodoList />
            <TodoForm />
          </>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}
