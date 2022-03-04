import React, { useState } from "react";

function EditApplicationForm({ data, setData, closeModal, tableProps }) {
  const [inputs, setInputs] = useState({
    idCol: tableProps.row.original.idCol,
    positionCol: tableProps.row.original.positionCol,
    companyCol: tableProps.row.original.companyCol,
    statusCol: tableProps.row.original.statusCol,
    appDateCol: tableProps.row.original.appDateCol,
    deadlineCol: tableProps.row.original.deadlineCol,
    skillsCol: tableProps.row.original.skillsCol,
    salaryCol: tableProps.row.original.salaryCol,
    notesCol: tableProps.row.original.notesCol,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => e.preventDefault();

  const handleEdit = () => {
    if (!inputs.positionCol) return setError("Position is required.");

    fetch("/applications", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id: inputs.idCol,
        position: inputs.positionCol,
        company: inputs.companyCol,
        status: inputs.statusCol,
        appDate: inputs.appDateCol,
        deadline: inputs.deadlineCol,
        skills: inputs.skillsCol,
        salary: inputs.salaryCol,
        notes: inputs.notesCol,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) return alert(res.error);

        // Create new copy of state and replace chosen row with new input
        const dataCopy = [...data];
        dataCopy[tableProps.row.index] = inputs;
        setData(dataCopy);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <h1 className="text-2xl">Edit Application</h1>
      <input
        name="positionCol"
        placeholder="Position"
        type="text"
        className="grayInput w-full"
        value={inputs.positionCol || ""}
        onChange={handleChange}
      />
      <input
        name="companyCol"
        placeholder="Company"
        type="text"
        className="grayInput w-full"
        value={inputs.companyCol || ""}
        onChange={handleChange}
      />
      <input
        name="statusCol"
        placeholder="Status"
        type="text"
        className="grayInput w-full"
        value={inputs.statusCol || ""}
        onChange={handleChange}
      />
      <input
        name="appDateCol"
        placeholder="Application Date"
        type="text"
        className="grayInput w-full"
        value={inputs.appDateCol || ""}
        onChange={handleChange}
      />
      <input
        name="deadlineCol"
        placeholder="Deadline"
        type="text"
        className="grayInput w-full"
        value={inputs.deadlineCol || ""}
        onChange={handleChange}
      />
      <input
        name="skillsCol"
        placeholder="Deadline"
        type="text"
        className="grayInput w-full"
        value={inputs.skillsCol || ""}
        onChange={handleChange}
      />
      <input
        name="salaryCol"
        placeholder="Salary"
        type="text"
        className="grayInput w-full"
        value={inputs.salaryCol || ""}
        onChange={handleChange}
      />
      <textarea
        rows={2}
        name="notesCol"
        placeholder="Notes"
        type="text"
        className="grayInput w-full"
        value={inputs.notesCol || ""}
        onChange={handleChange}
      />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="flex flex-row justify-evenly mt-6 gap-10">
        <button type="button" className="rounded basis-1/2 px-10 py-2 bg-red-300 hover:bg-red-400" onClick={closeModal}>
          Cancel
        </button>
        <button
          type="button"
          className="rounded basis-1/2 px-10 py-2 bg-green-200 hover:bg-green-300"
          onClick={handleEdit}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EditApplicationForm;
