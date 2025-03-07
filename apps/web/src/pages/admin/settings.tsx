import { useAuthStore } from "@/store/useAuthStore";

const Settings = () => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Bienvenido a Settings</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Settings;
