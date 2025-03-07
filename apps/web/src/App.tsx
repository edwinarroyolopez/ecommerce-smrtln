import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "@components/routes/ProtectedRoute";
import RoleProtectedRoute from "@components/routes/RoleProtectedRoute";

import { useAuthStore } from "./store/useAuthStore";
import AdminRoutes from "@/components/routes/AdminRoutes";

const ClientApp = lazy(() => import("./pages/ClientApp"));
const Login = lazy(() => import("./pages/Login"));


const App = () => {
  const { isAuthenticated } = useAuthStore();
  
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
            <Route path="/*" element={<AdminRoutes />} />
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
