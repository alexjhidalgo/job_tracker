import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function DeleteContactModal({ data, setData, showModal, closeModal, rowIndex, name }) {
  const handleDelete = () => setData(data.filter((_, i) => i !== rowIndex));

  return (
    <Transition appear show={showModal} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
        <div className="min-h-screen px-4 text-center bg-slate-500/50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-slate-900">
                Are you sure you want to remove <b>{name}</b> from your contacts?
              </Dialog.Title>
              <div className="flex flex-row justify-evenly mt-6">
                <button
                  type="button"
                  className="text-white rounded px-10 py-2 bg-slate-700 hover:bg-slate-900"
                  onClick={closeModal}
                >
                  No
                </button>
                <button type="button" className="rounded px-10 py-2 bg-red-300 hover:bg-red-400" onClick={handleDelete}>
                  Yes
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default DeleteContactModal;
