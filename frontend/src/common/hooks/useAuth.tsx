import axios from "axios";
import { useState } from "react";

type SignInCredentials = {
  email: string;
  password: string;
};

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const signIn = async (values: SignInCredentials) => {
    const { status } = await axios.post(
      "http://localhost:6000/auth/login",
      values,
    );

    if (status >= 200) {
      setAuthenticated(true);
    }
  };
  const signOut = () => {};

  return {
    authenticated,
    signIn,
    signOut,
  };
};
