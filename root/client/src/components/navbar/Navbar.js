import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline";
import DropdownOption from "./DropdownOption";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <>
      <div className="flex justify-end w-full bg-gray-700 ">
        <div className="flex flex-col justify-end items-end relative p-5 w-full">
          <div
            onClick={toggleDropdown}
            className="flex flex-row gap-3 justify-end items-center text-white hover:text-gray-300 cursor-pointer"
          >
            <p>[username]</p>
            <MenuIcon className="h-6" />
          </div>
          {showDropdown && (
            <div className="bg-gray-600 absolute top-11 right-0 m-5 divide-y divide-gray-300">
              <DropdownOption name="Profile" />
              <DropdownOption name="Home" />
              <DropdownOption name="Skills Overview" />
              <DropdownOption name="[etc]" />
              <DropdownOption name="Logout" path="/" />
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
