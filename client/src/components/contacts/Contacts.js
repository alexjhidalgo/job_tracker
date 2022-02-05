import React from "react";
import ContactsTable from "./ContactsTable";
import { PlusIcon } from "@heroicons/react/solid";

function Contacts() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col justify-center w-[90%] py-10 max-h-screen">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-4xl sm:text-5xl text-slate-900">Contacts</h1>
          <div className="flex flex-row justify-center items-center gap-2 p-2 text-white bg-slate-900 rounded cursor-pointer">
            <PlusIcon className="h-5" />
            <p>Add Contact</p>
          </div>
        </div>
        <ContactsTable />
      </div>
    </div>
  );
}

export default Contacts;
