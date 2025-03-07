import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleLogin = () => {
    if (!username.trim()) return;

    login(username);

    // Obtener el usuario actualizado después del login
    const user = useAuthStore.getState().user;

    if (user?.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/client");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
