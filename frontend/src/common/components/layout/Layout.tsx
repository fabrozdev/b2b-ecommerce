import { Header } from "@/common/components/layout/Header.tsx";
import { Box } from "@mui/material";
import { AppDrawer, DrawerHeader } from "@/common/components/layout/Drawer.tsx";
import { PropsWithChildren, useState } from "react";
import Typography from "@mui/material/Typography";

const Layout = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Header open={open} onClick={handleDrawerOpen} />
      <AppDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography variant="h4">Ciao Mirko!</Typography>
        <Typography variant="h5">Benvenuto nel tuo Ecommerce.</Typography>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
