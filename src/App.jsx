import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import { useEffect } from "react";
import { login } from "./features/authentication/auth.slice";

export default function App() {
  const { user } = useSelector((state) => {
    // console.log(state.auth);
    return state.auth;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    // const userData = localStorage.getItem("user");
    const loggedIn = JSON.parse(sessionStorage.getItem("user"));
    if (loggedIn) {
      dispatch(login(loggedIn));
    }
  }, []);

  return (
    <>
      <div>
        <h1>Hello World!</h1>
        {user ? <Tasks /> : <Login />}
      </div>
    </>
  );
}
