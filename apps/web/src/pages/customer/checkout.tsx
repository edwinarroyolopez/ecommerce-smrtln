import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Backdrop } from "@ecommerce-smrtln/ui/index";
import useField from "@/hooks/useField";
import styles from "./checkout.module.css";

const Checkout = () => {
  const navigate = useNavigate();

  const contact = useField({ type: "text", required: true });
  const billingAddress = useField({ type: "text" });
  const shippingAddress = useField({ type: "text", required: true });
  const name = useField({ type: "text", required: true });
  const email = useField({ type: "email", required: true });
  const country = useField({ type: "text", required: true });
  const orderNote = useField({ type: "text" });

  const [deliveryTime, setDeliveryTime] = useState("Mañana");

  const [open, setOpen] = useState(false);

  const handleCheckout = () => {
    const isValid =
      contact.validate() &&
      shippingAddress.validate() &&
      name.validate() &&
      email.validate() &&
      country.validate();

    if (!isValid) return;

    alert("Pedido realizado con éxito 🎉");
    navigate("/confirmation");
  };

  return (
    <div className={styles.container}>
      <Button onClick={() => setOpen(true)}>Abrir Backdrop</Button>

      <h1 className={styles.title}>Checkout</h1>

      {/* Nota de Pedido */}
      <div className={styles.section}>
        <h2>6️⃣ Nota de Pedido</h2>
        <Input label="Nota de Pedido" {...orderNote} className={styles.input} />
      </div>

      {/* Botón de Realizar Pedido */}
      <Button className={styles.checkoutButton} onClick={handleCheckout}>
        Realizar Pedido
      </Button>

      <Backdrop visible={open} onClick={() => setOpen(false)}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Hola, este es un modal</h2>
          {/* Número de Contacto */}
          <div className={styles.section}>
            <h2>1️⃣ Número de Contacto</h2>
            <Input
              label="Número de Contacto"
              {...contact}
              className={styles.input}
            />
          </div>

          {/* Dirección de Facturación */}
          <div className={styles.section}>
            <h2>2️⃣ Dirección de Facturación</h2>
            <Input
              label="Dirección de Facturación"
              {...billingAddress}
              className={styles.input}
            />
          </div>

          {/* Dirección de Envío */}
          <div className={styles.section}>
            <h2>3️⃣ Dirección de Envío</h2>
            <Input
              label="Dirección de Envío"
              {...shippingAddress}
              className={styles.input}
            />
          </div>

          {/* Horario de Entrega */}
          <div className={styles.section}>
            <h2>4️⃣ Horario de Entrega</h2>
            <div className={styles.deliveryTimes}>
              {["Mañana", "Mediodía", "Tarde", "Noche"].map((time) => (
                <Button
                  key={time}
                  className={`${styles.deliveryButton} ${deliveryTime === time ? styles.active : ""}`}
                  onClick={() => setDeliveryTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>

          {/* Datos Personales */}
          <div className={styles.section}>
            <h2>5️⃣ Datos Personales</h2>
            <Input label="Nombre completo" {...name} className={styles.input} />
            <Input
              label="Correo electrónico"
              {...email}
              className={styles.input}
            />
            <Input label="País" {...country} className={styles.input} />
          </div>

          <Button onClick={() => setOpen(false)}>Cerrar</Button>
        </div>
      </Backdrop>
    </div>
  );
};

export default Checkout;
