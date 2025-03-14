import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "ecommerce-smrtln-ui";
import CheckoutModal from "@components/customer/CheckoutModal/CheckoutModal";
import CartSummary from "@components/customer/CartSummary/CartSummary";
import styles from "./checkout.module.css";
import CustomerData from "@components/customer/CustomerData/CustomerData";
import { useAuthStore } from "@/store/useAuthStore";
import CheckoutSkeleton from "@components/customer/CheckoutSkeleton/CheckoutSkeleton";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";
import { useCart } from "@/hooks/useCart";
import { useCheckout } from "@/hooks/useCheckout";
import { useLoading } from "@/hooks/useLoading";

const Checkout = () => {
  const navigate = useNavigate();
  const { customerData } = useAuthStore();
  const { formState, dispatch } = useCheckoutForm(customerData);
  const { cart, clearCart, totalAmount, updateProductStock } = useCart();
  const { handleCheckout } = useCheckout(
    formState,
    cart,
    totalAmount,
    customerData,
    updateProductStock,
    clearCart
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const isLoading = useLoading();

  useEffect(() => {
    if (cart.length === 0 && !isCheckingOut) {
      navigate("/");
    }
  }, [cart.length, navigate, isCheckingOut]);


  if (isLoading) {
    return <CheckoutSkeleton />;
  }

  const onCheckout = () => {
    setIsCheckingOut(true);
    handleCheckout();
  };

  const requiredFields = Object.keys(formState).reduce(
    (acc, key) => {
      if (key !== "orderNote") {
        acc[key as keyof typeof formState] =
          formState[key as keyof typeof formState];
      }
      return acc;
    },
    {} as Partial<typeof formState>
  );

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.title}>Checkout</h1>

      <div className={styles.topCheckout}>
        <CartSummary cart={cart} totalAmount={totalAmount} />
        {Object.values(requiredFields).every((value) => value) && (
          <CustomerData formValues={formState} />
        )}
      </div>

      <div className={styles.bottonCheckout}>
        <Button
          className={styles.checkoutButton}
          onClick={() => setIsModalOpen(true)}
        >
          {Object.values(requiredFields).every((value) => value)
            ? "Editar datos"
            : "Cargar datos del cliente"}
        </Button>

        <div className={styles.section}>
          <h2>📝 Nota de Pedido</h2>
          <Input
            label="Nota de Pedido"
            name="orderNote"
            value={formState.orderNote}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                payload: { field: "orderNote", value: e.target.value },
              })
            }
          />
        </div>

        <Button className={styles.checkoutButton} onClick={onCheckout}>
          Proceder al Pago (${totalAmount.toFixed(0)})
        </Button>
      </div>

      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formState={formState}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Checkout;
