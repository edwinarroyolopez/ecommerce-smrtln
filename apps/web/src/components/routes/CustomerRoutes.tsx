import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import RoleProtectedRoute from "./RoleProtectedRoute";
import CustomerLayout from "@components/customer/layouts/CustomerLayout/CustomerLayout";
import { RouteConfig } from "@src/types/routes";

const Checkout = lazy(() => import("@/pages/customer/checkout"));
const Invoices = lazy(() => import("@/pages/customer/invoices"));
const Products = lazy(() => import("@/pages/customer/products"));
const Confirmation = lazy(() => import("@/pages/customer/confirmation"));

const customerRoutes: RouteConfig[] = [
  { path: "checkout", element: <Checkout /> },
  { path: "invoices", element: <Invoices /> },
  { path: "products", element: <Products /> },
  { path: "confirmation", element: <Confirmation /> },
];


const CustomerRoutes = () => {
  return (
    <Routes>
      <Route element={<RoleProtectedRoute allowedRole="client" redirectTo="/admin/dashboard" />}>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<Products />} />
          {customerRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default CustomerRoutes;
