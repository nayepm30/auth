import { useSelector } from "react-redux";
import Restricted from "../pages/Restricted";

export default function PrivateRoute({ children }) {
  const user = useSelector((state) => state.auth.user);

  // Si hay usuario logeado → permitir entrar
  if (user) return children;

  // Si no → mostrar mensaje de acceso restringido
  return <Restricted />;
}
