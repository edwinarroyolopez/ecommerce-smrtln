import { useAuthStore } from "@/store/useAuthStore";

const ClientApp = () => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Bienvenido a la app de Cliente</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ClientApp;
