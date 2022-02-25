import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";

function DropdownOption({ name, path, logout }) {
  return (
    <Menu.Item onClick={() => (logout ? logout() : null)}>
      <Link to={path} className="block w-full p-2 hover:bg-slate-900">
        {name}
      </Link>
    </Menu.Item>
  );
}

export default DropdownOption;
