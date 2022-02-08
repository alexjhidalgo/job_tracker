import React, { useState } from "react";

function EditContactForm({ data, setData, closeModal, rowIndex, rowValues }) {
  const [inputs, setInputs] = useState({
    nameCol: rowValues.nameCol,
    companyCol: rowValues.companyCol,
    positionCol: rowValues.positionCol,
    emailCol: rowValues.emailCol,
    numberCol: rowValues.numberCol,
    notesCol: rowValues.notesCol,
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

    const dataCopy = [...data];
    dataCopy[rowIndex] = inputs;
    setData(dataCopy);

    closeModal();
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
