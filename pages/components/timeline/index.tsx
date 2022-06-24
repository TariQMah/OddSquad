import React from "react";
import Newake from "../text/newake";
interface IProps {
  date: string;
  title: string;
  text: string;
  icon: boolean;
  margin?: string;
  left?: string;
  top?: string;
  width?: string;
}
const Index = ({
  date,
  title,
  text,
  icon = true,
  margin = "m-0",
  left = "left-0",
  top = "top-0",
  width = "w-72",
}: IProps) => {
  return (
    <div
      className={` ${width} top-0 ${margin} ${left} ${top} relative  float-right inline-block`}
    >
      <Newake tag="h4" margin="m-0" align="left" size="lg" color="yellowColor">
        {date}
      </Newake>

      <div className="flex mr-1 font-medium justify-between items-start">
        <Newake
          tag="h4"
          margin="m-0"
          size="text-timeLine"
          weight="font-normal"
          width="w-10/12"
          align="left"
          color="white"
        >
          {title}
        </Newake>
        {icon ? (
          <img src="images/greenCheck.svg" className="w-8" />
        ) : (
          <img src="images/greenCheck.svg" className="w-8" />
        )}
      </div>

      <p className="text-white text-sm">{text}</p>
    </div>
  );
};

export default Index;
