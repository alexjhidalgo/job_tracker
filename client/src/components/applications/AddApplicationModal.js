import React, { useState } from "react";
import Modal from 'react-modal';
// import { prop } from 'cheerio/lib/api/attributes';
function ApplicationModal (props) {
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState("");

    const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => e.preventDefault();

    const handleSave = () => {
    if (!inputs.company) return setError("Company is required.");

    fetch("/applications", {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
        company: inputs.company,
        position: inputs.position,
        salary: inputs.salary,
        description: inputs.description,
        date_added: inputs.date_added,
        status: inputs.status,
        notes: inputs.notes,
        }),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.error) return console.log(res.error);

        props.setData((prevState) => [
            {
            idCol: res.id,
            statusCol: inputs.status,
            date_addedCol: inputs.date_added,
            notesCol: inputs.notes,
            companyCol: inputs.company,
            positionCol: inputs.position,
            descriptionCol: inputs.description,
            salaryCol: inputs.salary,
            },
            ...prevState,
        ]);
        props.handleAppModClose();
        });
    };

    const customStyle = {
        content: {
            width: '600px',
            height: '500px',
            position: 'absolute',
            top: '10%',
            left: '35%',
        },
    };
    return (
        <Modal isOpen={props.modalIsOpen} style={customStyle}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h1 className="text-2xl">Add Application</h1>

                <input name="company" placeholder="Company" type="text" className="grayInput w-full" 
                value={inputs.company || ""}
                onChange={handleChange} 
                />
                <input name="position" placeholder="Position" type="text" className="grayInput w-full"
                value={inputs.position || ""} 
                onChange={handleChange} 
                />
                <input name="salary" placeholder="Salary" type="text" className="grayInput w-full" 
                value={inputs.salary || ""}
                onChange={handleChange} 
                />
                <input name="description" placeholder="Description" type="text" className="grayInput w-full" 
                value={inputs.description || ""}
                onChange={handleChange} 
                />
                <input name="date_added" placeholder="Date" type="text" className="grayInput w-full" 
                value={inputs.date_added || ""}
                onChange={handleChange} 
                />
                <input name="status" placeholder="Status" type="text" className="grayInput w-full" 
                value={inputs.status || ""}
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
                    <button type="button" onClick={props.handleAppModClose}
                    className="rounded basis-1/2 px-10 py-2 bg-red-300 hover:bg-red-400" >
                    Cancel
                    </button>
                    <button type="button" onClick={handleSave}
                    className="rounded basis-1/2 px-10 py-2 bg-green-200 hover:bg-green-300">
                    Save
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default ApplicationModal;
