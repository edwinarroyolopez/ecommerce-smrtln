import { Button, Input, Backdrop } from "@ecommerce-smrtln/ui/index";
import styles from "./CheckoutModal.module.css";
import { DELIVERY_TIMES } from "@/utils/constants";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  form: any;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, form }) => {
  return (
    <Backdrop visible={isOpen} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.section}>
          <h2>1️⃣ Datos Personales</h2>
          <Input label="Nombre completo" name="name" value={form.values.name} onChange={form.onChange} />
          <Input label="Correo electrónico" name="email" value={form.values.email} onChange={form.onChange} />
          <Input label="Número de Contacto" name="contact" value={form.values.contact} onChange={form.onChange} />
          <Input label="País" name="country" value={form.values.country} onChange={form.onChange} />
        </div>

        <div className={styles.section}>
          <h2>2️⃣ Dirección de Envío</h2>
          <Input label="Dirección de Envío" name="shippingAddress" value={form.values.shippingAddress} onChange={form.onChange} />
        </div>

        <div className={styles.section}>
          <h2>3️⃣ Horario de Entrega</h2>
          <div className={styles.deliveryTimes}>
            {DELIVERY_TIMES.map((time) => (
              <Button
                key={time}
                className={`${styles.deliveryButton} ${form.values.deliveryTime === time ? styles.active : ""}`}
                onClick={() => form.onChange({ target: { name: "deliveryTime", value: time } } as any)}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>

        <Button onClick={onClose}>Cerrar</Button>
      </div>
    </Backdrop>
  );
};

export default CheckoutModal;
