import React from "react";
import { useNavigate } from "react-router-dom";

function GuestLogin() {
  const navigate = useNavigate();

  const guestLogin = () => {
    console.log("clicked on guest login");
    navigate("/home");
  };

  return (
    <p onClick={guestLogin} className="font-thin underline cursor-pointer">
      Login as Guest
    </p>
  );
}

export default GuestLogin;
