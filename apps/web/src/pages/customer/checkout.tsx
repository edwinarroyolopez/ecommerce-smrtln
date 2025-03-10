import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "ecommerce-smrtln-ui";
import useFormFields from "@/hooks/useFormFields";
import CheckoutModal from "@components/customer/CheckoutModal/CheckoutModal";
import { useCartStore } from "@/store/useCartStore";
import CartSummary from "@components/customer/CartSummary/CartSummary";
import styles from "./checkout.module.css";
import CustomerData from "@components/customer/CustomerData/CustomerData";
import { useAuthStore } from "@/store/useAuthStore";
import { useInvoiceStore } from "@/store/useInvoiceStore";
import { Invoice } from "@src/types/invoice";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/utils/localStorageUtil";
import { Product } from "@/types/product";
import CheckoutSkeleton from "@components/customer/CheckoutSkeleton/CheckoutSkeleton";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { cart, clearCart } = useCartStore();
  const { addInvoice } = useInvoiceStore();
  const { user, customerData } = useAuthStore();

  const form = useFormFields({
    name: { type: "text", required: true },
    email: { type: "email", required: true },
    country: { type: "text", required: true },
    contact: { type: "text", required: true },
    shippingAddress: { type: "text", required: true },
    orderNote: { type: "text" },
    deliveryTime: { type: "text", defaultValue: "Mañana" },
  });

  useEffect(() => {
    if (customerData && Object.keys(customerData).length > 0) {
      form.setValues(customerData);
    }
  }, [customerData]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart.length, navigate]);

  const totalAmount = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const allFieldsFilled = useMemo(() => {
    const { orderNote, ...requiredFields } = form.values;
    return Object.values(requiredFields).every((value) => value);
  }, [form.values]);

  const updateProductStock = useCallback(() => {
    const products = getLocalStorageItem<Product[]>("products", []);
    const updatedProducts = products.map((product) => {
      const itemInCart = cart.find((cartItem) => cartItem.id === product.id);
      return itemInCart
        ? { ...product, stock: Math.max(product.stock - itemInCart.quantity, 0) }
        : product;
    });
    setLocalStorageItem("products", updatedProducts);
  }, [cart]);

  const handleCheckout = useCallback(() => {
    if (!form.validate() || cart.length === 0) return;

    updateProductStock();

    const newInvoice: Invoice = {
      id: Date.now(),
      date: new Date().toISOString(),
      items: cart,
      total: totalAmount,
      username: user?.username || "",
      orderNote: form.values.orderNote || undefined,
      customer: {
        name: form.values.name,
        email: form.values.email,
        country: form.values.country,
        contact: form.values.contact,
        shippingAddress: form.values.shippingAddress,
        deliveryTime: form.values.deliveryTime,
      },
    };

    addInvoice(newInvoice);
    clearCart();
    navigate("/confirmation");
  }, [
    form,
    cart,
    totalAmount,
    user,
    updateProductStock,
    addInvoice,
    clearCart,
    navigate,
  ]);

  if (isLoading) {
    return <CheckoutSkeleton />;
  }

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.title}>Checkout</h1>

      <div className={styles.topCheckout}>
        <CartSummary cart={cart} totalAmount={totalAmount} />
        {allFieldsFilled && <CustomerData formValues={form.values} />}
      </div>

      <div className={styles.bottonCheckout}>
        <Button
          className={styles.checkoutButton}
          onClick={() => setIsModalOpen(true)}
        >
          {allFieldsFilled ? "Editar datos" : "Cargar datos del cliente"}
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
          Proceder al Pago (${totalAmount.toFixed(0)})
        </Button>
      </div>

      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} form={form} />

    </div>
  );
};

export default Checkout;
