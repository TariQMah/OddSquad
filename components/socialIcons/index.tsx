import React from "react";
interface IProps {
  children: React.ReactNode;
  size?: string;
  margin?: string;
}
const Index = ({ children, size = "auto", margin = "mx-1" }: IProps) => {
  return (
    <div
      className={`${margin} h-${size} w-${size} rounded-full flex justify-center items-center`}
    >
      {children}
    </div>
  );
};

export default Index;
