import { useToastStore } from "@/store/useToastStore";
import { Toast } from "ecommerce-smrtln-ui";
import { createPortal } from "react-dom";

const ToastContainer = () => {
  const { toast } = useToastStore();

  if (!toast) return null;

  return createPortal(
    <div
      data-testid="toast-container"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "380px",
      }}
    >
      <Toast message={toast.message} type={toast.type} />
    </div>,
    document.body
  );
};

export default ToastContainer;
