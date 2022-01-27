import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setError }) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const attemptSignup = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <form onSubmit={attemptSignup} className="flex flex-col justify-center items-center gap-7 px-5 py-7">
      <input
        name="username"
        type="text"
        placeholder="Username"
        className="grayInput w-full"
        value={inputs.username || ""}
        onChange={handleChange}
      />

      <input
        name="email"
        type="text"
        placeholder="Email"
        value={inputs.email || ""}
        className="grayInput w-full"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={inputs.password || ""}
        className="grayInput w-full"
        onChange={handleChange}
      />

      <input
        name="repeatPassword"
        type="password"
        placeholder="Confirm Password"
        value={inputs.repeatPassword || ""}
        className="grayInput w-full"
        onChange={handleChange}
      />

      <button type="submit" className="customButton customGradient w-full">
        SIGN UP
      </button>
    </form>
  );
}

export default Signup;
