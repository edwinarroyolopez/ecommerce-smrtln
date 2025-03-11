// src/components/CheckoutModal.tsx
import { Button, Input, Backdrop } from "ecommerce-smrtln-ui";
import styles from "./CheckoutModal.module.css";
import { DELIVERY_TIMES } from "@/utils/constants";
import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import SelectCountry from "@components/common/SelectCountry/SelectCountry";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  form: {
    values: Record<string, string>;
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    errors: Record<string, string>;
    validate: () => boolean;
  };
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  form,
}) => {
  const setCustomerData = useAuthStore((state) => state.setCustomerData);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  console.log("CheckoutModal");
  console.log("isOpen", isOpen);

  const getError = (field: string) =>
    attemptedSubmit && form.errors[field] ? form.errors[field] : undefined;

  const handleClose = () => {
    console.log("handleClose");

    setAttemptedSubmit(true);
    if (!form.validate()) return;

    setAttemptedSubmit(false);
    const customerData = {
      name: form.values.name,
      email: form.values.email,
      contact: form.values.contact,
      country: form.values.country,
      shippingAddress: form.values.shippingAddress,
      deliveryTime: form.values.deliveryTime,
    };
    setCustomerData(customerData);
    onClose();
  };

  const renderInput = (label: string, name: string) => (
    <Input
      label={label}
      name={name}
      value={form.values[name]}
      onChange={form.onChange}
      error={getError(name)}
    />
  );

  return (
    <div style={{ display: isOpen ? "flex" : "none" }}> {/* workarround */}
      <Backdrop visible={isOpen} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.section}>
            <h2>1️⃣ Datos Personales</h2>
            {renderInput("Nombre completo", "name")}
            {renderInput("Correo electrónico", "email")}
            {renderInput("Número de Contacto", "contact")}
            <SelectCountry
              value={form.values.country}
              onChange={form.onChange}
              error={getError("country")}
            />
          </div>

          <div className={styles.section}>
            <h2>2️⃣ Dirección de Envío</h2>
            {renderInput("Dirección de Envío", "shippingAddress")}
          </div>

          <div className={styles.section}>
            <h2>3️⃣ Horario de Entrega</h2>
            <div className={styles.deliveryTimes}>
              {DELIVERY_TIMES.map((time) => (
                <Button
                  key={time}
                  className={`${styles.deliveryButton} ${form.values.deliveryTime === time ? styles.active : ""}`}
                  onClick={() =>
                    form.onChange({
                      target: { name: "deliveryTime", value: time },
                    } as any)
                  }
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>

          <Button className={styles.closeButton} onClick={handleClose}>
            Cerrar
          </Button>
        </div>
      </Backdrop>
    </div>
  );
};

export default CheckoutModal;
