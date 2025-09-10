import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import background from "@/assets/loginimage.webp";
import { SyntheticEvent, useState } from "react";
import { useAuth } from "@/common/hooks/useAuth.tsx";

const useStyles = makeStyles()(() => ({
  imageBox: {
    width: "55%",
    height: "100%",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  formBox: {
    margin: "8rem 4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Login = () => {
  const { classes } = useStyles();
  const { signIn } = useAuth();
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (email && password) {
      await signIn({ email, password });
    }
  };
  return (
    <Box
      component="main"
      sx={{ display: "flex", flexDirection: "row", height: "100vh" }}
    >
      <Box className={classes.imageBox} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box className={classes.formBox}>
          <Typography component="h1" variant="h5">
            Accedi alla tua botique
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ricordami"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Accedi
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
