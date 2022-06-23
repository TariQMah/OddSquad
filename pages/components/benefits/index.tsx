import React from "react";
import Newake from "../text/newake";
interface IProps {
  children?: any;
  subHeading?: string;
}
const Index = ({ children, subHeading }: IProps) => {
  return (
    <div className="rounded-3xl my-1 mx-4 text-center py-3 px-5 bg-opacity-0.3 bg-white">
      <Newake
        tag="h2"
        size="xl"
        textTransform="none"
        margin="m-0"
        color="white"
      >
        {children}
        {subHeading && (
          <span className="opacity-60 font-Newake font-light text-xs">
            subHeading
          </span>
        )}
      </Newake>
    </div>
  );
};

export default Index;
