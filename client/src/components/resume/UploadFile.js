import React, { useState } from "react";

function UploadFile({ closeModal, setData }) {
//   const [inputs, setInputs] = useState({});
//   const [error, setError] = useState("");
    const [selectedFile, setSelectedFile] = useState({});
    const [isSelected, setIsSelected] = useState(false);
    const [error, setError] = useState("");


  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmit = (e) => e.preventDefault();

  const handleSave = () => {
    if (!selectedFile.name) return setError("Please select a file.");
    // setData((prevState) => [
    //     {
    //       resumes: selectedFile.name,
    //     },
    //     ...prevState,
    //   ]);
    handleSubmit();
    closeModal();
  };

  return (
    <div>
      <h1 className="text-2xl">Add New Resume</h1>
      <input type="file" name="file" onChange={handleChange} />
      {isSelected ? (
          <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                  lastModifiedDate:{' '}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
          </div>
      ) : (
          <p>Select a file to show details</p>
      )}
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
    </div>
  );
}

export default UploadFile;