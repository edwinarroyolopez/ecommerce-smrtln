import { Routes, Route } from "react-router-dom";
import RoleProtectedRoute from "./RoleProtectedRoute";
import CustomerLayout from "@components/customer/layouts/CustomerLayout/CustomerLayout";
import Checkout from "@/pages/customer/checkout";
import Invoices from "@/pages/customer/invoices";
import Products from "@/pages/customer/products";

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route element={<RoleProtectedRoute allowedRole="client" redirectTo="/admin/dashboard" />}>
        <Route path="/" element={<CustomerLayout />}>
          <Route path="checkout" element={<Checkout />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default CustomerRoutes;
