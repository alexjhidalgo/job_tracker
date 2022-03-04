import React, { useState } from "react";
import { XIcon, PencilIcon, EyeIcon } from "@heroicons/react/solid";
import DeleteApplicationModal from "./DeleteApplicationModal";
import EditApplicationModal from "./EditApplicationModal";

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

      <button className="cursor-pointer hover:bg-gray-300 rounded-full p-2" onClick={openDeleteModal}>
        <EyeIcon className="h-5" />
      </button>

      <EditApplicationModal
        data={data}
        setData={setData}
        showModal={showEditModal}
        closeModal={closeEditModal}
        tableProps={tableProps}
      />

      <DeleteApplicationModal
        data={data}
        setData={setData}
        showModal={showDeleteModal}
        closeModal={closeDeleteModal}
        tableProps={tableProps}
      />
    </div>
  );
}

export default IconOptions;
