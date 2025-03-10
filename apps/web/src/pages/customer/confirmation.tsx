import { useNavigate } from "react-router-dom";
import { Button } from "ecommerce-smrtln-ui/index";
import "./confirmation.module.css";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h1>🎉 ¡Compra Confirmada! 🎉</h1>
        <p>Gracias por tu compra. Te hemos enviado un correo con los detalles del pedido.</p>
        <Button className="homeButton" onClick={() => navigate("/")}>Regresar al Inicio</Button>
      </div>
    </div>
  );
};

export default Confirmation;