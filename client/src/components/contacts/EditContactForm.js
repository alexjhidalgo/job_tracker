import React, { useState } from "react";

function EditContactForm({ data, setData, closeModal, tableProps }) {
  const [inputs, setInputs] = useState({
    idCol: tableProps.row.original.idCol,
    nameCol: tableProps.row.original.nameCol,
    companyCol: tableProps.row.original.companyCol,
    positionCol: tableProps.row.original.positionCol,
    emailCol: tableProps.row.original.emailCol,
    numberCol: tableProps.row.original.numberCol,
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
    if (!inputs.nameCol) return setError("Name is required.");

    fetch("/contacts", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id: inputs.idCol,
        name: inputs.nameCol,
        company: inputs.companyCol,
        position: inputs.positionCol,
        email: inputs.emailCol,
        number: inputs.numberCol,
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
      <h1 className="text-2xl">Edit Contact</h1>
      <input
        name="nameCol"
        placeholder="Name"
        type="text"
        className="grayInput w-full"
        value={inputs.nameCol || ""}
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
        name="positionCol"
        placeholder="Position"
        type="text"
        className="grayInput w-full"
        value={inputs.positionCol || ""}
        onChange={handleChange}
      />
      <input
        name="emailCol"
        placeholder="Email"
        type="text"
        className="grayInput w-full"
        value={inputs.emailCol || ""}
        onChange={handleChange}
      />
      <input
        name="numberCol"
        placeholder="Phone Number"
        type="text"
        className="grayInput w-full"
        value={inputs.numberCol || ""}
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

export default EditContactForm;
