import * as React from "react";
import { Redirect } from "react-router";
import { auth } from "../firebase/index";
import Spinner from "./Spinner";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Auth: React.FunctionComponent<React.ReactNode> = ({ children }): any => {
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
      setIsChecked(true);
    });
  }, []);

  if (!isChecked) {
    return <Spinner />;
  }

  if (auth.currentUser) {
    return children;
  }

  return <Redirect to="/login" />;
};

export default Auth;
