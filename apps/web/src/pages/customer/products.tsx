import { useAuthStore } from "@/store/useAuthStore";

const AdminApp = () => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Productos</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminApp;
