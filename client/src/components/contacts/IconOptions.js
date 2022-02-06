import React, { useState } from "react";
import { XIcon, PencilIcon } from "@heroicons/react/solid";
import DeleteContactModal from "./DeleteContactModal";

function IconOptions({ data, setData, tableProps }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const handleDelete = () => {
    const dataCopy = [...data];
    dataCopy.splice(tableProps.row.index, 1);
    setData(dataCopy);
  };

  return (
    <div className="flex gap-3 justify-end text-slate-900">
      <button className="cursor-pointer hover:bg-gray-300 rounded-full p-2">
        <PencilIcon className="h-5" />
      </button>

      <button className="cursor-pointer hover:bg-gray-300 rounded-full p-2" onClick={openDeleteModal}>
        <XIcon className="h-5" />
      </button>

      <DeleteContactModal
        showModal={showDeleteModal}
        closeModal={closeDeleteModal}
        handleDelete={handleDelete}
        name={tableProps.row.original.nameCol}
      />
    </div>
  );
}

export default IconOptions;
