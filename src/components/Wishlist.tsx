import React from "react";

interface Props {
  text: string;
}

const Wishlist: React.FC<Props> = ({ text }) => {
  return (
    <>
      <button className="bg-white ps-5 pe-4 w-7/12 py-1.5 text-xl font-bold rounded-xl flex items-center justify-between gap-2">
        <p className="grow break-all"> {text}</p>
        <p className="font-normal text-sm w-fit">X</p>
      </button>
    </>
  );
};

export default Wishlist;
