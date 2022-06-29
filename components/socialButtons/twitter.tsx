import Link from "next/link";
import React from "react";
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
      <a target="_blank" rel="noopener noreferrer">
        <div
          className={`${bgColor} mx-10 text-white text-center  items-center flex flex-row md:px-5 px-3 justify-between py-3 rounded-full p-1`}
        >
          {icon}
          <p className="w-full flex items-center justify-center leading-none font-JosefinSans uppercase  md:px-5 px-3 m-0 text-center">
            {text}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Twitter;
