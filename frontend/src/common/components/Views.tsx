import { protectedRoutes, publicRoutes } from "@/configs/routes.config.ts";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthorityGuard from "@/common/components/route/AuthorityGuard.tsx";
import ProtectedRoute from "@/common/components/route/ProtectedRoute.tsx";
import appConfig from "@/configs/app.config.ts";
import PublicRoute from "@/common/components/route/PublicRoute.tsx";
import Layout from "@/common/components/layout/Layout.tsx";
import { Suspense } from "react";
import { Loading } from "@/common/components/Loading.tsx";

const { authenticatedEntryPath } = appConfig;

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route
          path="/"
          element={<Navigate replace to={authenticatedEntryPath} />}
        />
        {protectedRoutes.map((route, index) => (
          <Route
            key={route.key + index}
            path={route.path}
            element={
              <AuthorityGuard userAuthority={[]} authority={route.authority}>
                <Layout>
                  <route.component />
                </Layout>
              </AuthorityGuard>
            }
          />
        ))}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
      <Route path="/" element={<PublicRoute />}>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
    </Routes>
  );
};
const Views = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AllRoutes />
    </Suspense>
  );
};

export default Views;
