import React, { useState, useEffect } from "react";
import ApplicationTable from "./ApplicationTable";
import AddApplicationButton from "./AddApplicationButton";

function Applications() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/applications", {
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
        positionCol: resultList[i].position,
        companyCol: resultList[i].company,
        statusCol: resultList[i].status,
        appDateCol: resultList[i].appDate,
        deadlineCol: resultList[i].deadline,
        skillsCol: resultList[i].skills,
        salaryCol: resultList[i].salary,
        notesCol: resultList[i].notes,
      });
    }

    return dataList;
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col justify-center w-[90%] py-10 max-h-screen">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-4xl sm:text-5xl text-slate-900">Application</h1>
          <AddApplicationButton setData={setData} />
        </div>
        <ApplicationTable data={data} setData={setData} loading={loading} />
      </div>
    </div>
  );
}

export default Applications;
