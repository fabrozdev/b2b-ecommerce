import "./App.css";
import "@fontsource/poppins";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "@/common/components/Layout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
