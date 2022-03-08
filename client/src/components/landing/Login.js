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

  const validateInput = () => {
    if (!inputs.username || !inputs.password) {
      setError("Missing credentials");
      return false;
    }

    return true;
  };

  const attemptLogin = (e) => {
    e.preventDefault();

    if (!validateInput()) return;

    fetch("/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: inputs.username,
        password: inputs.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) return setError(res.error);
        localStorage.setItem("token", res.jwt);
        navigate("/applications");
      });
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
