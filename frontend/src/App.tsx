import "./App.css";
import "@fontsource/poppins";
import { AuthGate } from "@/common/components/route/AuthGate.tsx";
import { SnackbarProvider } from "notistack";
import { Snackbar } from "@/common/toast/Snackbar.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "@/common/store/store.ts";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/common/components/Theme.tsx";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Snackbar />
              <AuthGate />
            </SnackbarProvider>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
