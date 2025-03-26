import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";

export default function App() {
  const { user } = useSelector((state) => {
    // console.log(state.auth);
    return state.auth;
  });
  // console.log(user);

  return (
    <>
      <div>
        <h1>Hello World!</h1>
        {user ? <Tasks /> : <Login />}
      </div>
    </>
  );
}
