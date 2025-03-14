import "ecommerce-smrtln-ui/styles.css";
import * as Sentry from "@sentry/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

import { SENTRY_DNS } from "@/utils/constants";
import { Loading } from "ecommerce-smrtln-ui";
import ToastContainer from "@components/common/ToastContainer";
import ProtectedRoute from "@components/routes/ProtectedRoute";

import { useAuthStore } from "./store/useAuthStore";
import AdminRoutes from "@/components/routes/AdminRoutes";
import CustomerRoutes from "@/components/routes/CustomerRoutes";
import PublicRoutes from "@/components/routes/PublicRoutes";

const Login = lazy(() => import("./pages/Login"));

Sentry.init({
  dsn: SENTRY_DNS,
});

const queryClient = new QueryClient();

const App = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <QueryClientProvider client={queryClient}>
      <Sentry.ErrorBoundary fallback={<h1>Something went wrong</h1>}>
      <HelmetProvider>
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Public routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<PublicRoutes />} />
              <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
                {/* Admin routes */}
                <Route path="/admin/*" element={<AdminRoutes />} />
                {/* Customer routes */}
                <Route path="/*" element={<CustomerRoutes />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
        </HelmetProvider>
        <ToastContainer />
      </Sentry.ErrorBoundary>
    </QueryClientProvider> 
  );
};

export default App;
