import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { authenticationActions } from "@/features/authentication/store/authenticationSlice.ts";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

type HeaderProps = {
  open: boolean;
  onClick: () => void;
};

export const DRAWER_WIDTH = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Header = (props: HeaderProps) => {
  const { open, onClick } = props;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authenticationActions.logoutSuccessfulAction());
  };
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onClick}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            B2B Ecommerce
          </Typography>
        </Box>
        <IconButton
          color="inherit"
          aria-label="logout"
          onClick={handleLogout}
          edge="start"
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
