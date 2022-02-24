import React, { useState } from "react";
import AddResumeButton from "./AddResumeButton";
import AddCoverLetterButton from "./AddCoverLetterButton";
import Tiles from "./Tiles";

function Resume() {
  const buildExampleData = (repeat) => {
    let dataList = [];
      dataList.push({
        resumes: "This is where your resumes populate.",
        coverLetters: "This is where your coverletters populate."
      });
    return dataList;
  };

  const [data, setData] = useState(buildExampleData(10));

  return (
    <div className="flex w-full justify-center">

      <div className="flex flex-col justify-center w-[90%] py-10 max-h-screen">
        <Tiles data={data} setData={setData} />
        <div className="flex flex-row justify-between items-left">

          <h1 className="text-4xl sm:text-5xl text-slate-900">Resumes</h1>
          <AddResumeButton setData={setData} />

        </div>
        <div className="flex flex-row justify-between items-right">

          <h1 className="text-4xl sm:text-5xl text-slate-900">Resumes</h1>
          <AddCoverLetterButton setData={setData} />
        
        </div>

      </div>

    </div>
  );
}

export default Resume;