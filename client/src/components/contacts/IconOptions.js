import React, { useState } from "react";
import { XIcon, PencilIcon } from "@heroicons/react/solid";
import DeleteContactModal from "./DeleteContactModal";
import EditContactModal from "./EditContactModal";

function IconOptions({ data, setData, tableProps }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);

  return (
    <div className="flex gap-3 justify-end text-slate-900">
      <button className="cursor-pointer hover:bg-gray-300 rounded-full p-2" onClick={openEditModal}>
        <PencilIcon className="h-5" />
      </button>

      <button className="cursor-pointer hover:bg-gray-300 rounded-full p-2" onClick={openDeleteModal}>
        <XIcon className="h-5" />
      </button>

      <EditContactModal
        data={data}
        setData={setData}
        showModal={showEditModal}
        closeModal={closeEditModal}
        rowValues={tableProps.row.original}
        rowIndex={tableProps.row.index}
      />

      <DeleteContactModal
        data={data}
        setData={setData}
        showModal={showDeleteModal}
        closeModal={closeDeleteModal}
        rowIndex={tableProps.row.index}
        name={tableProps.row.original.nameCol}
      />
    </div>
  );
}

export default IconOptions;
