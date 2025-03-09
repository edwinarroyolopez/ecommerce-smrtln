import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@ecommerce-smrtln/ui/index";
import useFormFields from "@/hooks/useFormFields";
import CheckoutModal from "@components/customer/CheckoutModal/CheckoutModal";
import styles from "./checkout.module.css";

const Checkout = () => {
  const navigate = useNavigate();

  const form = useFormFields({
    name: { type: "text", required: true },
    email: { type: "email", required: true },
    country: { type: "text", required: true },
    contact: { type: "text", required: true },
    shippingAddress: { type: "text", required: true },
    orderNote: { type: "text" },
  });

  const [deliveryTime, setDeliveryTime] = useState("Mañana");
  const [open, setOpen] = useState(false);

  const handleCheckout = () => {
    if (!form.validate()) return;

    alert("Pedido realizado con éxito 🎉");
    navigate("/confirmation");
  };

  return (
    <div className={styles.container}>
      <Button onClick={() => setOpen(true)}>Abrir Backdrop</Button>

      <h1 className={styles.title}>Checkout</h1>

      <div className={styles.section}>
        <h2>6️⃣ Nota de Pedido</h2>
        <Input label="Nota de Pedido" name="orderNote" value={form.values.orderNote} onChange={form.onChange} />
      </div>

      <Button className={styles.checkoutButton} onClick={handleCheckout}>
        Realizar Pedido
      </Button>

      <CheckoutModal isOpen={open} onClose={() => setOpen(false)} form={form} deliveryTime={deliveryTime} setDeliveryTime={setDeliveryTime} />
    </div>
  );
};

export default Checkout;
