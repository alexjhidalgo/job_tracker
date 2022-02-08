import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import DropdownOption from "./DropdownOption";

function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-end sm:justify-between items-center p-5 w-full bg-slate-900 text-white">
        <div className="hidden sm:flex flex-row items-center gap-4">
          <img src="/images/jt_logo.png" alt="job tracker logo" className="h-8" />
          <h1 className="text-xl">Job Tracker</h1>
        </div>
        <Menu as="div" className="relative inline-block z-10">
          <div>
            <Menu.Button className="flex flex-row gap-4 hover:text-slate-300">
              <p>[username]</p>
              <MenuIcon className="h-7" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 bg-slate-700 rounded-sm">
              <div className="py-1 divide-y divide-slate-400">
                <DropdownOption name="Home" path="/home" />
                <DropdownOption name="Contacts" path="/contacts" />
                <DropdownOption name="Logout" path="/" />
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
