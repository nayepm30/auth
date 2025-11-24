import { useSelector, useDispatch } from "react-redux";
import { logout } from "../firebase";
import { logoutUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Private() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    dispatch(logoutUser());

    // 🚀 Redirigir al login después de cerrar sesión
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Bienvenido {user?.displayName}</h1>

      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}
