import { useState, useEffect } from "react";
import { ToastContainer, Message, CloseButton } from "./styles/toast.styles";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "warning";
  duration?: number;
  onClose?: () => void;
}

const Toast = ({ message, type = "success", duration = 3000, onClose }: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <ToastContainer type={type}>
      <Message>{message}</Message>
      <CloseButton onClick={() => setVisible(false)}>✖</CloseButton>
    </ToastContainer>
  );
};

export default Toast;
