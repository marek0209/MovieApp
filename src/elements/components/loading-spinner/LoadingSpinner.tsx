import React from "react";

function LoadingSpinner() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4">
        Loading...
      </div>
    </div>
  );
}

export default LoadingSpinner;
