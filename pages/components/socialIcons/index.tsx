import React from "react";
interface IProps {
  children: React.ReactNode;
}
const Index = ({ children }: IProps) => {
  return (
    <div className="mx-1 rounded-full flex justify-center items-center">
      {children}
    </div>
  );
};

export default Index;
