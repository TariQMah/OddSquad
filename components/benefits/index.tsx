import React from "react";
import Newake from "../text/newake";
interface IProps {
  children?: any;
  subHeading?: string;
  fontSize?: string;
}
const Index = ({ children, subHeading }: IProps) => {
  return (
    <div className="rounded-3xl flex justify-center items-center my-1 mx-4 text-center py-3 min-h-[100px] px-5 bg-opacity-[0.2] bg-white">
      <Newake
        tag="h2"
        size="text-lg md:text-lg"
        textTransform="none"
        margin="m-0"
        letterSpace="tracking-normal"
        color="white"
      >
        {children}
        {subHeading && (
          <span className="opacity-60 block font-Newake font-light text-xs">
            {subHeading}
          </span>
        )}
      </Newake>
    </div>
  );
};

export default Index;
