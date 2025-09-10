import { useLoginMutation } from "@/api/authentication";
import { useDispatch, useSelector } from "react-redux";
import {
  authenticationActions,
  AuthenticationSelector,
} from "@/features/authentication/store/authenticationSlice.ts";
import Snackbar from "@/common/toast/Snackbar.tsx";

type SignInCredentials = {
  email: string;
  password: string;
};

export const useAuth = () => {
  const dispatch = useDispatch();
  const authentication = useSelector(AuthenticationSelector);
  const [login, { isLoading, error }] = useLoginMutation();

  const signIn = async (credentials: SignInCredentials) => {
    try {
      await login(credentials).unwrap();
      dispatch(
        authenticationActions.loginSuccessfulAction({
          sessionToken: "",
          username: "",
          _id: "",
          email: "",
        }),
      );
    } catch (e) {
      console.log(error);
      Snackbar.error("Errore: " + error);
    }
  };
  const signOut = () => {};

  return {
    authenticated: authentication.authenticated,
    isLoading,
    signIn,
    signOut,
  };
};
