import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "@components/routes/ProtectedRoute";
// import Layout from "./components/layouts/Layout";
const ClientApp = lazy(() => import("./pages/ClientApp"));
const AdminApp = lazy(() => import("./pages/AdminApp"));
const Login = lazy(() => import("./pages/Login"));




const App = () => {
  const isAuthenticated = true;
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>

          <Route path="/admin" element={<AdminApp />} />
          <Route path="/client" element={<ClientApp />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
