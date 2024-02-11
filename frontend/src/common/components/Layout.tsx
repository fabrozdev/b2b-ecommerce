import { lazy, Suspense, useMemo } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useAuth } from "@/common/hooks/useAuth.tsx";

export const Layout = () => {
  const { authenticated } = useAuth();
  //const { authenticated } = useAuth()
  const App = useMemo(() => {
    if (authenticated) {
      return lazy(() => import("./MiniDrawer"));
    }
    return lazy(() => import("./AuthLayout"));
  }, [authenticated]);

  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      }
    >
      <App />
    </Suspense>
  );
};
