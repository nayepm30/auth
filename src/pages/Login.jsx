import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { loginGoogle } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await loginGoogle();
      dispatch(login(result.user));

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Iniciar sesión</h1>
      <button onClick={handleLogin}>Registrate con google</button>
    </div>
  );
}
