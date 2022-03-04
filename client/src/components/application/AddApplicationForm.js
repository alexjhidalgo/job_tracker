import React, { useState } from "react";

function AddApplicationForm({ closeModal, setData }) {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const position = e.target.position;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [position]: value }));
  };

  const handleSubmit = (e) => e.preventDefault();

  const handleSave = () => {
    if (!inputs.position) return setError("Position is required.");

    fetch("/applications", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        position: inputs.position,
        company: inputs.company,
        status: inputs.status,
        appDate: inputs.appDate,
        deadline: inputs.deadline,
        skills: inputs.skills,
        salary: inputs.salary,
        notes: inputs.notes,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) return console.log(res.error);

        setData((prevState) => [
          {
            idCol: res.id,
            positionCol: inputs.position,
            companyCol: inputs.company,
            statusCol: inputs.status,
            appDateCol: inputs.appDate,
            deadlineCol: inputs.deadline,
            skillsCol: inputs.skills,
            salaryCol: inputs.salary,
            notesCol: inputs.notes,
          },
          ...prevState,
        ]);
        closeModal();
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <h1 className="text-2xl">Add New Application</h1>
      <input
        position="position"
        placeholder="Position"
        type="text"
        className="grayInput w-full"
        value={inputs.position || ""}
        onChange={handleChange}
      />
      <input
        position="company"
        placeholder="Company"
        type="text"
        className="grayInput w-full"
        value={inputs.company || ""}
        onChange={handleChange}
      />
      <input
        position="status"
        placeholder="Status"
        type="text"
        className="grayInput w-full"
        value={inputs.status || ""}
        onChange={handleChange}
      />
      <input
        position="appDate"
        placeholder="Application Date"
        type="text"
        className="grayInput w-full"
        value={inputs.appDate || ""}
        onChange={handleChange}
      />
      <input
        position="deadline"
        placeholder="Deadline"
        type="text"
        className="grayInput w-full"
        value={inputs.deadline || ""}
        onChange={handleChange}
      />
      <input
        position="skills"
        placeholder="Skills"
        type="text"
        className="grayInput w-full"
        value={inputs.skills || ""}
        onChange={handleChange}
      />
      <input
        position="salary"
        placeholder="Salary"
        type="text"
        className="grayInput w-full"
        value={inputs.salary || ""}
        onChange={handleChange}
      />
      <textarea
        rows={2}
        position="notes"
        placeholder="Notes"
        type="text"
        className="grayInput w-full"
        value={inputs.notes || ""}
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
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default AddApplicationForm;
