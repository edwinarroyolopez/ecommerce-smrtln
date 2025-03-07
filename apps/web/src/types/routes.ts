import { ReactElement } from "react";
export interface ProtectedRouteProps {
    redirectTo?: string;
}

export type Route = {
  path: string;
  label: string;
}

export type RouteConfig = {
  path: string;
  element: ReactElement;
};