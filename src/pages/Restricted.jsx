import { useNavigate } from "react-router-dom";

export default function Restricted() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Pagina privada</h2>
      <p>Debes iniciar sesión con google para continuar</p>

      <button
        onClick={() => navigate("/login")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Ir al Login
      </button>
    </div>
  );
}
