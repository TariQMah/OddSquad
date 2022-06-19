import React from "react";
interface IProps {
  text?: string;
}
const Button = ({ text }: IProps) => {
  return (
    <button
      type="button"
      className="text-center drop-shadow-2xl	 px-10 py-4 text-xs font-semibold m-auto my-2 text-black uppercase justify-items-center flex font-JosefinSans bg-white rounded-3xl	"
    >
      {text}
    </button>
  );
};

export default Button;
