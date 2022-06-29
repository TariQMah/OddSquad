import React, { useState } from "react";
interface IProps {
  title: string;
  content: string;
}
const Index = ({ title, content }: IProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item mx-2 my-3">
      <div
        className="flex items-center  justify-between text-white bg-white bg-opacity-10 px-4 py-5 rounded-3xl p-2"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="uppercase font-bold font-JosefinSans text-sm md:text-md">
          {title}
        </div>
        <div className="text-white flex items-center md:text-2xl leading-0 -mt-1 h-2 text-4xl">
          {isActive ? "-" : "+"}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content font-bold md:text-md md:text-left font-JosefinSans text-center text-white text-sm p-4">
          {content}
        </div>
      )}
    </div>
  );
};

export default Index;
