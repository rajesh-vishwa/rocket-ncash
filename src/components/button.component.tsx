import React from "react";
type TButtonProps = {
  buttonText: string;
};
export const Button: React.FC<TButtonProps> = ({ buttonText }) => {
  return (
    <div>
      <span>Button</span>
      <button className="focus:outline-none text-sm w-24 py-3 rounded-md font-semibold text-black bg-blue-500 ring-0">
        {buttonText}
      </button>
    </div>
  );
};

//export default Button;
