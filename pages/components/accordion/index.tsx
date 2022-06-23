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
        <div className="uppercase font-JosefinSans text-sm">{title}</div>
        <div className="text-white flex items-center leading-0 -mt-1 h-2 text-4xl">
          {isActive ? "-" : "+"}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content font-JosefinSans text-center text-white text-sm p-4">
          {content}
        </div>
      )}
    </div>
  );
};

export default Index;
