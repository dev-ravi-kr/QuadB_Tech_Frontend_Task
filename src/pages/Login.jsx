import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authentication/auth.slice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    const user = { username, password };
    dispatch(login(user));
    sessionStorage.setItem("user", JSON.stringify(user));
    const lsUser = JSON.parse(localStorage.getItem("user"));
    if (lsUser.username !== user.username) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.removeItem("todoList");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={loginHandler}>
        <div>
          <label htmlFor="">username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
