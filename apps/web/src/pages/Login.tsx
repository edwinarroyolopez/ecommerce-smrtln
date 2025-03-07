import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { Button, Input } from "@ecommerce-smrtln/ui/index";
import useField from "@/hooks/useField";
import styles from "./Login.module.css";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const username = useField({ type: "text", required: true });
  const password = useField({ type: "password", required: true });

  const handleLogin = () => {
    const isValid = username.validate() && password.validate();
    if (!isValid) return;

    login({ username: username.value, password: password.value });
    const user = useAuthStore.getState().user;

    navigate(user?.role === "admin" ? "/admin" : "/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Iniciar Sesión</h2>
        <Input 
          label="Usuario" 
          {...username} 
          placeholder="Ingresa tu usuario" 
          className={styles.input} 
        />
        <Input 
          label="Contraseña" 
          {...password} 
          placeholder="••••••" 
          className={styles.input} 
        />
        <Button onClick={handleLogin} className={styles.button}>Login</Button>
      </div>
    </div>
  );
};


export default Login;
