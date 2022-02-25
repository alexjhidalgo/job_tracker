import React, { useState, useEffect } from "react";
import ContactsTable from "./ContactsTable";
import AddContactButton from "./AddContactButton";

function Contacts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/contacts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(buildData(res));
        setLoading(false);
      });
  }, []);

  const buildData = (resultList) => {
    const dataList = [];
    for (let i = 0; i < resultList.length; ++i) {
      dataList.push({
        idCol: resultList[i].id,
        nameCol: resultList[i].name,
        companyCol: resultList[i].company,
        positionCol: resultList[i].position,
        emailCol: resultList[i].email,
        numberCol: resultList[i].phone_number,
        notesCol: resultList[i].notes,
      });
    }

    return dataList;
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col justify-center w-[90%] py-10 max-h-screen">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-4xl sm:text-5xl text-slate-900">Contacts</h1>
          <AddContactButton setData={setData} />
        </div>
        <ContactsTable data={data} setData={setData} loading={loading} />
      </div>
    </div>
  );
}

export default Contacts;
