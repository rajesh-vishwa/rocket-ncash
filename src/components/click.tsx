import React from "react";

const Click: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const handleClick = () => {
    console.log("click handle");
    onClick();
  };
  return (
    <button
      onClick={handleClick}
      className="focus:outline-none text-m w-24 py-3 rounded-md font-bold text-white bg-green-500 ring-0"
    >
      Click me
    </button>
  );
};

export default Click;
