import { useAuthStore } from "@/store/useAuthStore";
import { useInvoiceStore } from "@/store/useInvoiceStore";

const Invoices = () => {
  const { user } = useAuthStore();
  const { invoices } = useInvoiceStore();

  const userInvoices = invoices.filter((invoice) => invoice.username === user?.username);

  return (
    <div>
      <h1>Facturas</h1>

      {userInvoices.length > 0 ? (
        <ul>
          {userInvoices.map((invoice) => (
            <li key={invoice.id}>
              <strong>#{invoice.id}</strong> - {invoice.date} - Total: ${invoice.total.toFixed(0)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes facturas registradas.</p>
      )}

    </div>
  );
};

export default Invoices;
