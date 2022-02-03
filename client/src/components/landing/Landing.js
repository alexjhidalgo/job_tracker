import React from "react";
import { ArrowDownIcon } from "@heroicons/react/outline";
import AuthPanel from "./AuthPanel";

function Landing() {
  const scrollToLogin = () => {
    document.getElementById("loginSection").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full gap-5 customGradient">
      <div className="flex flex-col justify-center items-center w-full md:w-[50%] min-h-screen text-white gap-4 p-5 text-center">
        <img src="/images/jt_logo.png" alt="job tracker logo" className="max-h-[280px] mt-auto md:mt-0" />

        <h1 className="text-5xl">Job Tracker</h1>
        <p>Manage your applications, resumes, and contacts.</p>

        <div
          className="flex flex-col justify-center items-center self-center gap-3 mt-auto cursor-pointer md:hidden"
          onClick={scrollToLogin}
        >
          <p>Login/Sign Up</p>
          <ArrowDownIcon className="h-5 animate-bounce" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-[50%] min-h-screen">
        <AuthPanel />
      </div>
    </div>
  );
}

export default Landing;
