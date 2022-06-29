import React from "react";
interface IProps {
  text?: string;
}
const Button = ({ text }: IProps) => {
  return (
    <button
      type="button"
      className="text-center md:leading-none drop-shadow-2xl leading-4 items-center	md:pb-4 md:pt-5 md:px-8 px-10 py-4 text-sm font-bold m-auto md:my-0 my-2 text-black uppercase justify-center flex font-JosefinSans bg-white rounded-3xl	"
    >
      {text}
    </button>
  );
};

export default Button;
