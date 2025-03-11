import { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
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
} from "ecommerce-smrtln-ui";
import { useInvoiceStore } from "@/store/useInvoiceStore";
import InvoicesTable from "@components/admin/InvoicesTable/InvoicesTable";
import InvoiceModal from "@components/common/InvoiceModal/InvoiceModal";
import { Invoice } from "@src/types/invoice";
import ProductsSoldTable from "@components/admin/ProductsSoldTable/ProductsSoldTable";
import DashboardSkeleton from "@components/admin/DashboardSkeleton/DashboardSkeleton";
import { getInvoiceSummary } from "calculations-ecommerce-smrtln";


const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const { invoices } = useInvoiceStore();

  useEffect(() => {
    setTimeout(() => {
      if (invoices.length > 0) {
        setIsLoading(false);
      }
    }, 2000); // Simula carga de 2 segundos
  }, [invoices]);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  const { totalIncome, totalInvoices, uniqueUsers, totalProductsSold, topSellingProducts } = getInvoiceSummary(invoices);

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
              price={totalIncome}
            />
            <StickerCard
              titleTransKey="Facturas totales"
              icon={<ShoppingIcon style={{ width: "32px", height: "32px" }} />}
              color="#865DFF"
              price={totalInvoices}
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
            <InvoicesTable
              invoices={invoices}
              onInvoiceSelect={(invoice) => {
                setSelectedInvoice(invoice);
                setModalOpen(true);
              }}
            />
          </ContentGrid>
        </SummaryCard>
      </DashboardWrapper>

      <DashboardWrapper>
        <SummaryCard>
          <Header>
            <Title>Productos más vendidos</Title>
          </Header>
          <ProductsSoldTable products={topSellingProducts} />
        </SummaryCard>
      </DashboardWrapper>

      <InvoiceModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        invoice={selectedInvoice}
      />
    </div>
  );
};

export default Dashboard;
