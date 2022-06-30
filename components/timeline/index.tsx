import React from "react";
import JosefinSans from "../text/josefinSans";
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
  dateSize = "md:text-lg",
  textSize = "md:text-lg",
  float = "float-right",
  position = "relative",
}: IProps) => {
  return (
    <div
      className={` ${width} top-0 ${margin} ${left} ${position} ${top} ${float} `}
    >
      <h4 className="font-JosefinSans  normal-case mb-0 md:mb-0 text-left text-lg md:text-lg tracking-normal font-[700]  yellowColor">
        {date}
      </h4>

      <div className="flex mr-1 font-medium justify-between items-start">
        <Newake
          tag="h4"
          margin="m-0"
          size={`text-timeLine ${headingSize}`}
          weight="font-normal"
          width="w-11/12"
          textTransform="normal-case"
          align="left"
          color="white"
        >
          {title}
        </Newake>
        {icon ? (
          <img src="images/greenCheck.svg" className="w-8" />
        ) : (
          <img src="images/settingIcon.png" className="w-8" />
        )}
      </div>

      <p className={`text-white text-sm  font-JosefinSans ${textSize}`}>
        {text}
      </p>
    </div>
  );
};

export default Index;
