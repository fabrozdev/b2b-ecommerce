import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#11151C",
    },
    secondary: {
      main: "#FF9800", // Example secondary color
    },
    background: {
      default: "#F5F5F5", // Example background color
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif", // Use Poppins as the default font
  },
  // Add other theme settings like typography, spacing, etc. as needed
});

export default theme;
