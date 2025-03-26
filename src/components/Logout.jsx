import { useDispatch } from "react-redux";
import { logout } from "../features/authentication/auth.slice";

export default function Logout() {
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e;
    dispatch(logout());
    sessionStorage.removeItem("user");
  };

  return (
    <>
      <div>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </>
  );
}
