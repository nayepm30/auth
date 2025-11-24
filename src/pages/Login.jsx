import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { loginGoogle } from "../firebase";

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const result = await loginGoogle();
      dispatch(login(result.user));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <button onClick={handleLogin}>Login con Google</button>
    </div>
  );
}
