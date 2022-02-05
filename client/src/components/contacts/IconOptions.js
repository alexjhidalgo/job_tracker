import React from "react";
import { XIcon, PencilIcon } from "@heroicons/react/solid";

function IconOptions() {
  return (
    <div className="flex gap-3 justify-end text-slate-900">
      <button className="cursor-pointer hover:bg-gray-300 rounded-full p-2">
        <PencilIcon className="h-5" />
      </button>

      <button className="cursor-pointer hover:bg-gray-300 rounded-full p-2">
        <XIcon className="h-5" />
      </button>
    </div>
  );
}

export default IconOptions;
