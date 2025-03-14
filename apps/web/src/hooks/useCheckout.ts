import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useInvoiceStore } from "@/store/useInvoiceStore";
import { Invoice, FormState } from "@src/types/invoice";
import { CartItem } from '@/types/cart'
import { User } from '@/types/auth'

export const useCheckout = (
  formState: FormState,
  cart: CartItem[],
  totalAmount: number,
  user: User | null,
  updateProductStock: () => void,
  clearCart: () => void
) => {
  const navigate = useNavigate();
  const { addInvoice } = useInvoiceStore();

  const handleCheckout = useCallback(() => {
    const { orderNote, ...requiredFields } = formState;
    const allFieldsFilled = Object.values(requiredFields).every((value) => value);

    if (!allFieldsFilled || cart.length === 0) return;

    updateProductStock();

    const newInvoice: Invoice = {
      id: Date.now(),
      date: new Date().toISOString(),
      items: cart,
      total: totalAmount,
      username: user?.username || "",
      orderNote: formState.orderNote || undefined,
      customer: {
        name: formState.name,
        email: formState.email,
        country: formState.country,
        contact: formState.contact,
        shippingAddress: formState.shippingAddress,
        deliveryTime: formState.deliveryTime,
      },
    };

    addInvoice(newInvoice);
    clearCart();
    navigate("/confirmation");
  }, [formState, cart, totalAmount, user, updateProductStock, addInvoice, clearCart, navigate]);

  return { handleCheckout };
};