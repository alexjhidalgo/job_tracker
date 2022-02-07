import React, { useState } from "react";
import ContactsTable from "./ContactsTable";
import AddContactButton from "./AddContactButton";

function Contacts() {
  const buildExampleData = (repeat) => {
    let dataList = [];
    for (let i = 0; i < repeat; ++i) {
      dataList.push({
        nameCol: "firstname lastname " + i,
        companyCol: "company " + i,
        positionCol: "position " + i,
        emailCol: i + "@email.com",
        numberCol: "555-5555",
        notesCol:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      });
    }
    return dataList;
  };

  const [data, setData] = useState(buildExampleData(10));

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col justify-center w-[90%] py-10 max-h-screen">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-4xl sm:text-5xl text-slate-900">Contacts</h1>
          <AddContactButton setData={setData} />
        </div>
        <ContactsTable data={data} setData={setData} />
      </div>
    </div>
  );
}

export default Contacts;
