import React from "react";
import { useNavigate } from "react-router-dom";

function GoogleLogin() {
  const navigate = useNavigate();

  const googleLogin = () => {
    console.log("clicked on google login");
    navigate("/home");
  };

  return (
    <p onClick={googleLogin} className="font-thin underline cursor-pointer">
      Login with Google
    </p>
  );
}

export default GoogleLogin;
