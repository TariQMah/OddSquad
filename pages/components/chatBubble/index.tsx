import React from "react";
interface IProps {
  message: string;
  left?: number;
  align?: string;
}
const Index = ({ message, left = 1, align }: IProps) => {
  return (
    <div
      className={`flex ${
        align === "right" ? "justify-end" : "justify-start"
      } my-10  m-auto  `}
    >
      <div className={`inline-block max-w-xs	px-5 py-4 relative  h-auto chat`}>
        <p className="text-white break-words font-JosefinSans font-normal text-sm">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Index;
