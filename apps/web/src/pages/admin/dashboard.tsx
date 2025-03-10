import styles from "./dashboard.module.css";
import {
  StickerCard,
  EaringIcon,
  ShoppingIcon,
  CustomerIcon,
  OrderProcessedIcon,
  CalendarIcon,
  DashboardWrapper,
  SummaryCard,
  Header,
  Title,
  ContentGrid,
  TableContainer,
  Table,
  Th,
  Td,
  EyeIcon,
} from "@ecommerce-smrtln/ui/index";
import { useInvoiceStore } from "@/store/useInvoiceStore";

const Dashboard = () => {
  const { invoices } = useInvoiceStore();
  const uniqueUsers = new Set(invoices.map((invoice) => invoice.username)).size;
  const totalProductsSold = invoices.reduce(
    (total, invoice) => total + invoice.items.length,
    0
  );

  return (
    <div>
      <DashboardWrapper>
        <SummaryCard>
          <Header>
            <Title>Resumen</Title>
          </Header>
          <ContentGrid>
            <StickerCard
              titleTransKey="Los ingresos totales"
              icon={<EaringIcon style={{ width: "32px", height: "32px" }} />}
              color="#1EAE98"
              price={invoices.reduce(
                (total, invoice) => total + (invoice.total ?? 0),
                0
              )}
            />
            <StickerCard
              titleTransKey="Facturas totales"
              icon={<ShoppingIcon style={{ width: "32px", height: "32px" }} />}
              color="#865DFF"
              price={invoices.length}
            />
            <StickerCard
              titleTransKey="Usuarios registrados"
              icon={<CustomerIcon style={{ width: "32px", height: "32px" }} />}
              color="#0094FF"
              price={uniqueUsers}
            />
            <StickerCard
              titleTransKey="Productos vendidos"
              icon={
                <OrderProcessedIcon style={{ width: "32px", height: "32px" }} />
              }
              color="#EA9453"
              price={totalProductsSold}
            />
          </ContentGrid>
        </SummaryCard>
      </DashboardWrapper>

      <DashboardWrapper>
        <SummaryCard>
          <Header>
            <Title>Facturas</Title>
          </Header>
          <ContentGrid className={styles.tableContainer}>
            <TableContainer>
              <Table>
                <thead>
                  <tr>
                    <Th width="15%">N°</Th>
                    <Th width="25%" align="center" className={styles.hideOnSmallScreen}>
                      <CustomerIcon
                        style={{ width: "32px", height: "32px" }}
                        primary="#555"
                        secondary="#212529"
                      />
                    </Th>
                    <Th align="center">
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
                      <Td width="25%" className={styles.hideOnSmallScreen}>
                        {invoice.customer.name} <br />
                        <small>{invoice.customer.email}</small>
                      </Td>
                      <Td align="center">
                        {new Date(invoice.date)
                          .toISOString()
                          .split("T")[0]
                          .replace(/-/g, "/")}
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
                          onMouseEnter={(e: React.MouseEvent<SVGElement>) =>
                            (e.currentTarget.style.transform = "scale(1.1)")
                          }
                          onMouseLeave={(e: React.MouseEvent<SVGElement>) =>
                            (e.currentTarget.style.transform = "scale(1)")
                          }
                        />
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </ContentGrid>
        </SummaryCard>
      </DashboardWrapper>
    </div>
  );
};

export default Dashboard;
