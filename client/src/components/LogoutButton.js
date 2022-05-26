import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout, isAuthenticated, user } = useAuth0();



  return (
    isAuthenticated && (
      <div>
        Hello, {  JSON.stringify(user.nickname).replace(/['"]+/g, '')} {' '}
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
      </div>
    )
  );
};

export default LogoutButton;