import appConfig from "@/configs/app.config.ts";
import { REDIRECT_URL_KEY } from "@/constants/app.constant.ts";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/common/hooks/useAuth.tsx";

const { unAuthenticatedEntryPath } = appConfig;

const ProtectedRoute = () => {
  const { authenticated } = useAuth();

  const location = useLocation();

  if (!authenticated) {
    return (
      <Navigate
        replace
        to={`${unAuthenticatedEntryPath}?${REDIRECT_URL_KEY}=${location.pathname}`}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
