import { Header } from "@/common/components/Header.tsx";
import { Box } from "@mui/material";
import { AppDrawer, DrawerHeader } from "@/common/components/Drawer.tsx";
import { useState } from "react";

const MiniDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", border: "1px solid red" }}>
      <Header open={open} onClick={handleDrawerOpen} />
      <AppDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, display: "flex", py: 3 }}>
        <DrawerHeader />
        <p>Test</p>
      </Box>
    </Box>
  );
};

export default MiniDrawer;
