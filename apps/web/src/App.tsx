import * as Sentry from "@sentry/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "@ecommerce-smrtln/ui/styles.css";
import "./App.css";

import { SENTRY_DNS } from "@/utils/constants";
import { Loading } from "@ecommerce-smrtln/ui/index";
import ToastContainer from "@components/common/ToastContainer";
import ProtectedRoute from "@components/routes/ProtectedRoute";

import { useAuthStore } from "./store/useAuthStore";
import AdminRoutes from "@/components/routes/AdminRoutes";
import CustomerRoutes from "@/components/routes/CustomerRoutes";

const Login = lazy(() => import("./pages/Login"));

Sentry.init({
  dsn: SENTRY_DNS,
});

const App = () => {
  const { isAuthenticated } = useAuthStore();

  return (
      <Sentry.ErrorBoundary fallback={<h1>Something went wrong</h1>}>
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
                {/* Admin routes */}
                <Route path="/admin/*" element={<AdminRoutes />} />
                {/* Customer routes */}
                <Route path="/*" element={<CustomerRoutes />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
        <ToastContainer />
      </Sentry.ErrorBoundary>
  );
};

export default App;
