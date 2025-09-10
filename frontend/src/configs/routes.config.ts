import { lazy } from "react";

export const publicRoutes = [
  {
    key: "login",
    path: `/login`,
    component: lazy(() => import("@/common/components/Login.tsx")),
    authority: [],
  },
];
export const protectedRoutes = [
  {
    key: "home",
    path: "/home",
    component: lazy(() => import("@/features/dashboard/pages/Dashboard.tsx")),
    authority: [],
  },
  {
    key: "products",
    path: "/products",
    component: lazy(() => import("@/features/products/pages/Products.tsx")),
    authority: [],
  },
  {
    key: "orders",
    path: "/orders",
    component: lazy(() => import("@/features/orders/pages/Orders.tsx")),
    authority: [],
  },
];
