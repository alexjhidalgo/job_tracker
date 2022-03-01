import React from "react";

function LoadingSpinner() {
  return (
    <div className="w-full flex justify-center items-center py-16">
      <div className="w-12 h-12 border-8 border-slate-300 rounded-full border-t-8 border-t-slate-900 animate-spin" />
    </div>
  );
}

export default LoadingSpinner;
