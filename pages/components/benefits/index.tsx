import React from "react";
import Newake from "../text/newake";
interface IProps {
  children?: any;
}
const Index = ({ children }: IProps) => {
  return (
    <div className="rounded-3xl my-1 mx-4 text-center py-3 px-5 bg-opacity-0.3 bg-white">
      <Newake tag="p" size="xl" textTransform="none" margin="m-0" color="white">
        {children}
      </Newake>
    </div>
  );
};

export default Index;
