import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
interface IProps {
  bgColor?: string;
  icon?: React.ReactElement;
  text: string;
  link?: string;
}
const Twitter = ({
  bgColor = "bg-twitter",
  text,
  icon,
  link = "#",
}: IProps) => {
  return (
    <Link href={link}>
      <div
        className={`${bgColor} mx-10 text-white text-center  items-center flex flex-row md:px-5 px-3 justify-between py-3 rounded-full p-1`}
      >
        {icon}
        <p className="w-full font-JosefinSans uppercase  leading-6 md:px-5 px-3 m-0 text-center">
          {text}
        </p>
      </div>
    </Link>
  );
};

export default Twitter;
