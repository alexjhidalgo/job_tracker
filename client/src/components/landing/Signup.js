import React, { useState } from "react";

function Signup({ setError }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const validateInput = () => {
    if (!inputs.username || !inputs.email || !inputs.password) {
      setError("Missing credentials");
      return false;
    }

    if (inputs.password !== inputs.repeatPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  const attemptSignup = (e) => {
    e.preventDefault();

    if (!validateInput()) return;

    fetch("account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: inputs.username,
        password: inputs.password,
        email: inputs.email,
      }),
    })
      .then((res) => res)
      .then((res) => {
        if (res.status !== 200) return setError("Signup failed");
        alert("Account created successfully. Please log in.");
      });
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
