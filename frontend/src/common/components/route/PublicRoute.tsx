import { Navigate, Outlet } from "react-router-dom";
import appConfig from "@/configs/app.config.ts";
import { useAuth } from "@/common/hooks/useAuth.tsx";

const { authenticatedEntryPath } = appConfig;

const PublicRoute = () => {
  const { authenticated } = useAuth();

  return authenticated ? <Navigate to={authenticatedEntryPath} /> : <Outlet />;
};

export default PublicRoute;
