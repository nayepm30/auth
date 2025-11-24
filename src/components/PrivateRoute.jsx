import { useSelector } from "react-redux";
import Restricted from "../pages/Restricted";

export default function PrivateRoute({ children }) {
  const user = useSelector((state) => state.auth.user);

  if (user) return children;

  return <Restricted />;
}
