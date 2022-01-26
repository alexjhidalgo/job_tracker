import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import GuestLogin from "./GuestLogin";

function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const attemptLogin = (e) => {
    e.preventDefault();
    console.log(`login username: ${inputs.username}, password: ${inputs.password}`);
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-[90%] sm:w-[60%] md:w-[40%] border-2 border-gray-300 rounded p-8">
        <form onSubmit={attemptLogin} className="flex flex-col justify-center items-center gap-7">
          <h1>Login</h1>
          <label className="flex flex-col w-full">
            Username
            <input
              name="username"
              type="text"
              className="grayInput"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col w-full">
            Password
            <input
              name="password"
              type="password"
              value={inputs.password || ""}
              className="grayInput"
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="blueButton">
            LOGIN
          </button>
          <div className="flex flex-col justify-center items-center gap-5 mt-4">
            <GoogleLogin />
            <GuestLogin />
            <Link to="/signup" className="font-thin underline cursor-pointer">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
