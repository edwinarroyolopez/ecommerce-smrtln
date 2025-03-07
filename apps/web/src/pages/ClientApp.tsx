import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";

const ClientApp = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Bienvenido a la app de Cliente</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ClientApp;
