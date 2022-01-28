import React from "react";

function Tab({ text, active, setSelf, setOther, setError }) {
  const toggle = () => {
    setError(null);
    setSelf(true);
    setOther(false);
  };

  return (
    <div
      className={`w-full text-center ${
        active
          ? "bg-white text-slate-900"
          : "bg-gray-400 text-slate-600 hover:bg-gray-300 hover:text-slate-900 cursor-pointer"
      }`}
      onClick={toggle}
    >
      <p className="p-5">{text}</p>
      <span className={`block h-1 w-full ${active ? "bg-slate-900" : "bg-gray-400"}`} />
    </div>
  );
}

export default Tab;
