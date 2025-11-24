import { useSelector, useDispatch } from "react-redux";
import { logout } from "../firebase";
import { logoutUser } from "../store/authSlice";

export default function Private() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch(logoutUser());
  };

  return (
    <div>
      <h1>Bienvenido {user?.displayName}</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}
