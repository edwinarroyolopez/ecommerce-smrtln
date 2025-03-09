import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@ecommerce-smrtln/ui/index";
import useFormFields from "@/hooks/useFormFields";
import CheckoutModal from "@components/customer/CheckoutModal/CheckoutModal";
import { useCartStore } from "@/store/useCartStore";
import CartSummary from "@components/customer/CartSummary/CartSummary"; // Nuevo componente
import styles from "./checkout.module.css";

const Checkout = () => {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);

  const form = useFormFields({
    name: { type: "text", required: true },
    email: { type: "email", required: true },
    country: { type: "text", required: true },
    contact: { type: "text", required: true },
    shippingAddress: { type: "text", required: true },
    orderNote: { type: "text" },
    deliveryTime: { type: "text", defaultValue: "Mañana" }, // Ahora dentro del form
  });

  const [open, setOpen] = useState(false);

  const totalAmount = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const handleCheckout = () => {
    if (!form.validate() || cart.length === 0) return;

    alert("Pedido realizado con éxito 🎉");
    navigate("/confirmation");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Checkout</h1>
      <CartSummary cart={cart} totalAmount={totalAmount} />
      
      <Button className={styles.checkoutButton} onClick={() => setOpen(true)}>
        Cargar datos del cliente
      </Button>

      <div className={styles.section}>
        <h2>📝 Nota de Pedido</h2>
        <Input
          label="Nota de Pedido"
          name="orderNote"
          value={form.values.orderNote}
          onChange={form.onChange}
        />
      </div>

      <Button className={styles.checkoutButton} onClick={handleCheckout}>
        Proceder al Pago (${totalAmount.toFixed(2)})
      </Button>

      <CheckoutModal isOpen={open} onClose={() => setOpen(false)} form={form} />
    </div>
  );
};

export default Checkout;
