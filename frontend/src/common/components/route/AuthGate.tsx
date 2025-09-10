import { lazy, Suspense, useMemo } from "react";
import { useAuth } from "@/common/hooks/useAuth.tsx";
import { Loading } from "@/common/components/Loading.tsx";

export const AuthGate = () => {
  const { authenticated } = useAuth();
  const App = useMemo(() => {
    if (authenticated) {
      return lazy(() => import("../Views.tsx"));
    }
    return lazy(() => import("../Login.tsx"));
  }, [authenticated]);

  return (
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  );
};
