import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <button className="button__sign-up nav-link text-upper text-white fw-6 ls-1 fs-20 text-center" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};

export default SignupButton