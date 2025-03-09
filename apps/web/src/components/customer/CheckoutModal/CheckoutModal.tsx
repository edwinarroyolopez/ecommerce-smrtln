import { Button, Input, Backdrop } from "@ecommerce-smrtln/ui/index";
import styles from "./CheckoutModal.module.css";
import { DELIVERY_TIMES } from "@/utils/constants";
import { useState } from "react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  form: {
    values: Record<string, string>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errors: Record<string, string>;
    validate: () => boolean;
  };
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  form,
}) => {
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const getError = (field: string) =>
    attemptedSubmit && form.errors[field] ? form.errors[field] : undefined;

  const handleClose = () => {
    setAttemptedSubmit(true);
    if (form.validate()) {
      setAttemptedSubmit(false);
      onClose();
    }
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
    <Backdrop visible={isOpen} onClick={() => handleClose()}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.section}>
          <h2>1️⃣ Datos Personales</h2>
          {renderInput("Nombre completo", "name")}
          {renderInput("Correo electrónico", "email")}
          {renderInput("Número de Contacto", "contact")}
          {renderInput("País", "country")}
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

        <Button className={styles.closeButton} onClick={handleClose}>Cerrar</Button>
      </div>
    </Backdrop>
  );
};

export default CheckoutModal;
