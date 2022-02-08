import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import AddContactModal from "./AddContactModal";

function AddContactButton({ setData }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const openModal = () => setShowAddModal(true);
  const closeModal = () => setShowAddModal(false);

  return (
    <div
      className="flex flex-row justify-center items-center gap-2 p-2 text-white bg-slate-900 rounded cursor-pointer"
      onClick={openModal}
    >
      <PlusIcon className="h-5" />
      <p>Add Contact</p>
      <AddContactModal showModal={showAddModal} closeModal={closeModal} setData={setData} />
    </div>
  );
}

export default AddContactButton;
