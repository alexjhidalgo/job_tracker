import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Tab from "./Tab";

function AuthPanel() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const googleLogin = () => {
    console.log("clicked on google login");
    navigate("/home");
  };

  const guestLogin = () => {
    console.log("clicked on guest login");
    navigate("/home");
  };

  return (
    <div className=" w-[90%] sm:w-[60%] md:w-[80%] rounded bg-white">
      <div className="flex flex-row">
        <Tab text="LOGIN" active={showLogin} setSelf={setShowLogin} setOther={setShowSignup} />
        <Tab text="SIGN UP" active={showSignup} setSelf={setShowSignup} setOther={setShowLogin} />
      </div>
      {showLogin ? <Login /> : <Signup />}
      <div className="flex flex-col justify-center items-center gap-5 my-6">
        <img
          src="/images/btn_google_signin_dark_normal_web@2x.png"
          alt="Sign in with Google"
          className="h-11 cursor-pointer"
          onClick={googleLogin}
        />
        <p onClick={guestLogin} className="font-thin underline cursor-pointer">
          Login as Guest
        </p>
      </div>
    </div>
  );
}

export default AuthPanel;