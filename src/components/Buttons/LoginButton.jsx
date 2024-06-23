import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <button className="button__login nav-link text-upper text-white fw-6 ls-1 fs-20 text-center" onClick={handleLogin}>
      Sign in
    </button>
  );
};

export default LoginButton;