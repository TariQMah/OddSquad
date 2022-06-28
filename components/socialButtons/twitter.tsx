import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
interface IProps {
  bgColor?: string;
  icon?: React.ReactElement;
  text: string;
}
const Twitter = ({ bgColor = "bg-twitter", text, icon }: IProps) => {
  return (
    <div
      className={`${bgColor} mx-10 text-white text-center  items-center flex flex-row px-5 justify-between py-3 rounded-full p-1`}
    >
      {icon}
      <p className="w-full font-JosefinSans uppercase  leading-6	px-5 m-0 text-center">
        {text}
      </p>
    </div>
  );
};

export default Twitter;
