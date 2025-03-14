import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import PublicLayout from "@components/common/layout/PublicLayout";
import { RouteConfig } from "@src/types/routes";

const PublicProducts = lazy(() => import("@/pages/PublicProducts"));

const publicRoutes: RouteConfig[] = [
  { path: "products", element: <PublicProducts /> }
];

const PublicRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<PublicProducts />} />
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
    </Routes>
  );
};

export default PublicRoutes;
