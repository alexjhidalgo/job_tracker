import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-5">
      <p>[landing page]</p>
      <p>redirect to home page if a user is logged in</p>
      <div className="flex flex-col justify-center items-center gap-5 w-[200px]">
        <Link to="/login" className="blueButton w-full">
          Login
        </Link>
        <Link to="/signup" className="blueButton w-full">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Landing;
