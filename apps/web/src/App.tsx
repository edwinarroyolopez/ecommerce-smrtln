import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "@components/routes/ProtectedRoute";
import RoleProtectedRoute from "@components/routes/RoleProtectedRoute";

import { useAuthStore } from "./store/useAuthStore";
// import Layout from "./components/layouts/Layout";
const ClientApp = lazy(() => import("./pages/ClientApp"));
const AdminApp = lazy(() => import("./pages/AdminApp"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  const { isAuthenticated } = useAuthStore();
  
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
            <Route element={<RoleProtectedRoute allowedRole="admin" redirectTo="/client" />}>
              <Route path="/admin" element={<AdminApp />} />
            </Route>
            <Route element={<RoleProtectedRoute allowedRole="client" redirectTo="/admin" />}>
              <Route path="/client" element={<ClientApp />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
