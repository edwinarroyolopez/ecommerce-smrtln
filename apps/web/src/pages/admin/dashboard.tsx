import {
  StickerCard,
  EaringIcon,
  ShoppingIcon,
  CustomerIcon,
  OrderProcessedIcon,
  DashboardWrapper,
  SummaryCard,
  Header,
  Title,
  ContentGrid,
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
              price={invoices.reduce((total, invoice) => total + (invoice.total ?? 0), 0)}
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
    </div>
  );
};

export default Dashboard;
