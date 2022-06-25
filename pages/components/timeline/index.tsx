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
  headingSize?: string;
  dateSize?: string;
  textSize?: string;
  float?: string;
  position?: string;
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
  headingSize = "text-lg",
  dateSize = "text-lg",
  textSize = "text-lg",
  float = "float-right",
  position = "relative",
}: IProps) => {
  return (
    <div
      className={` ${width} top-0 ${margin} ${left} ${position} ${top} relative ${float} inline-block`}
    >
      <Newake
        tag="h4"
        margin="m-0"
        align="left"
        size={`text-lg ${dateSize}`}
        color="yellowColor"
      >
        {date}
      </Newake>

      <div className="flex mr-1 font-medium justify-between items-start">
        <Newake
          tag="h4"
          margin="m-0"
          size={`text-timeLine ${headingSize}`}
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

      <p className={`text-white text-sm  ${textSize}`}>{text}</p>
    </div>
  );
};

export default Index;
