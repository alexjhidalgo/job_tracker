import React, { useState } from "react";

function AddContactForm({ closeModal, setData }) {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => e.preventDefault();

  const handleSave = () => {
    if (!inputs.name) return setError("Name is required.");
    setData((prevState) => [
      {
        nameCol: inputs.name,
        companyCol: inputs.company,
        positionCol: inputs.position,
        emailCol: inputs.email,
        numberCol: inputs.number,
        notesCol: inputs.notes,
      },
      ...prevState,
    ]);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <h1 className="text-2xl">Add New Contact</h1>
      <input
        name="name"
        placeholder="Name"
        type="text"
        className="grayInput w-full"
        value={inputs.name || ""}
        onChange={handleChange}
      />
      <input
        name="company"
        placeholder="Company"
        type="text"
        className="grayInput w-full"
        value={inputs.company || ""}
        onChange={handleChange}
      />
      <input
        name="position"
        placeholder="Position"
        type="text"
        className="grayInput w-full"
        value={inputs.position || ""}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        type="text"
        className="grayInput w-full"
        value={inputs.email || ""}
        onChange={handleChange}
      />
      <input
        name="number"
        placeholder="Phone Number"
        type="text"
        className="grayInput w-full"
        value={inputs.number || ""}
        onChange={handleChange}
      />
      <textarea
        rows={2}
        name="notes"
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

export default AddContactForm;
