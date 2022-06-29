import React from "react";
interface IProps {
  text?: string;
}
const Button = ({ text }: IProps) => {
  return (
    <button
      type="button"
      className="text-center drop-shadow-2xl leading-4 items-center	md:py-5 md:px-6 px-10 py-4 text-xs font-bold m-auto my-2 text-black uppercase justify-center flex font-JosefinSans bg-white rounded-3xl	"
    >
      {text}
    </button>
  );
};

export default Button;
