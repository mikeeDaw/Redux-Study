import React from "react";

interface Props {
  value: string;
  handleClick: () => {};
}

const MathBtn: React.FC<Props> = ({ value, handleClick }) => {
  return (
    <button
      className="grow bg-[#006f60] text-white text-lg rounded-xl"
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default MathBtn;
