import React from "react";
interface IProps {
  children: React.ReactNode;
  size?: string;
}
const Index = ({ children, size = "auto" }: IProps) => {
  return (
    <div
      className={`mx-1 h-${size} w-${size} rounded-full flex justify-center items-center`}
    >
      {children}
    </div>
  );
};

export default Index;
