import React from "react";
import { useNavigate } from "react-router-dom";

function DropdownOption({ name, path }) {
  const navigate = useNavigate();

  return (
    <div
      className="p-3 text-white cursor-pointer hover:bg-gray-800 bg-transparent"
      onClick={path ? () => navigate(path) : null}
    >
      {name}
    </div>
  );
}

export default DropdownOption;
