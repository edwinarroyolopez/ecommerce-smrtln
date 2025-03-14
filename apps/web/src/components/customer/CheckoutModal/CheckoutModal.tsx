import { Button, Input, Backdrop } from "ecommerce-smrtln-ui";
import styles from "./CheckoutModal.module.css";
import { DELIVERY_TIMES } from "@/utils/constants";
import { useAuthStore } from "@/store/useAuthStore";
import SelectCountry from "@components/common/SelectCountry/SelectCountry";
import { FormState } from "@src/types/invoice";


interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  formState: FormState;
  dispatch: (action: { type: string; payload?: any }) => void;
}


const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  formState,
  dispatch,
}) => {
  const setCustomerData = useAuthStore((state) => state.setCustomerData);

  const handleClose = () => {
    const requiredFields = ["name", "email", "contact", "country", "shippingAddress"];
    const isValid = requiredFields.every((field) => formState[field as keyof typeof formState]);

    if (!isValid) return;

    setCustomerData(formState);
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    dispatch({ type: "UPDATE_FIELD", payload: { field, value } });
  };

  const renderInput = (label: string, name: string) => (
    <Input
      label={label}
      name={name}
      value={formState[name]}
      onChange={(e) => handleChange(name, e.target.value)}
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
              value={formState.country}
              onChange={(e) => handleChange("country", e.target.value)}
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
                  className={`${styles.deliveryButton} ${formState.deliveryTime === time ? styles.active : ""}`}
                  onClick={() => handleChange("deliveryTime", time)}
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