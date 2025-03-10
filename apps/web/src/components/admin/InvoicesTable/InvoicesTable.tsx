import styles from "./InvoicesTable.module.css";
import { TableContainer, Table, Th, Td, EyeIcon, CustomerIcon, CalendarIcon } from "ecommerce-smrtln-ui";
import { Invoice } from "@src/types/invoice";

interface InvoicesTableProps {
  invoices: Invoice[];
  onInvoiceSelect: (invoice: Invoice) => void;
}

const InvoicesTable: React.FC<InvoicesTableProps> = ({ invoices, onInvoiceSelect }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th width="15%">N°</Th>
            <Th width="25%" align="center" className={styles.hideOnXM}>
              <CustomerIcon style={{ width: "32px", height: "32px" }} primary="#555" secondary="#212529" />
            </Th>
            <Th align="center" className={styles.hideOnXS}>
              <CalendarIcon style={{ width: "32px", height: "32px" }} />
            </Th>
            <Th align="center">$</Th>
            <Th align="center"></Th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <Td width="15%">{invoice.id}</Td>
              <Td width="25%" className={styles.hideOnXM}>
                {invoice.customer.name} <br />
                <small>{invoice.customer.email}</small>
              </Td>
              <Td align="center" className={styles.hideOnXS}>
                {new Date(invoice.date).toISOString().split("T")[0].replace(/-/g, "/")}
              </Td>
              <Td align="center">{invoice.total}</Td>
              <Td align="center">
                <EyeIcon
                  style={{
                    width: "32px",
                    height: "32px",
                    cursor: "pointer",
                    transition: "transform 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e: React.MouseEvent<SVGElement>) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e: React.MouseEvent<SVGElement>) => (e.currentTarget.style.transform = "scale(1)")}
                  onClick={() => onInvoiceSelect(invoice)}
                />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default InvoicesTable;
