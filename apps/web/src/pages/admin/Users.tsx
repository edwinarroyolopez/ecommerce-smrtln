import { useAuthStore } from "@/store/useAuthStore";

const Users = () => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Bienvenido a Users</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Users;
