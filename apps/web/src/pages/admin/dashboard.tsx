import { useAuthStore } from "@/store/useAuthStore";

const Dashboard = () => {
  const logout = useAuthStore((state) => state.logout);
  console.log("Dashboard");

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Bienvenido a Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;