import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/store/useAuthStore";

import { Button } from "@ecommerce-smrtln/ui/button";

const Login = () => {
  console.log("Login");

  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleLogin = () => {
    if (!username.trim()) return;

    login(username);
    const user = useAuthStore.getState().user;

    if (user?.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
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
      <Button onClick={handleLogin}>Login</Button>
      <Button variant="primary">Ingresar</Button>
      <Button variant="secondary">Cancelar</Button>
    </div>
  );
};

export default Login;
