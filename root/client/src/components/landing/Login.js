import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setError }) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const attemptLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <form onSubmit={attemptLogin} className="flex flex-col justify-center items-center gap-7 px-5 py-7">
      <input
        name="username"
        placeholder="Username"
        type="text"
        className="grayInput w-full"
        value={inputs.username || ""}
        onChange={handleChange}
      />

      <input
        name="password"
        placeholder="Password"
        type="password"
        value={inputs.password || ""}
        className="grayInput w-full"
        onChange={handleChange}
      />

      <button type="submit" className="customButton customGradient w-full">
        LOGIN
      </button>
    </form>
  );
}

export default Login;
