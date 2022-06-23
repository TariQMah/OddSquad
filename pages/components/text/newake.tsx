import React from "react";

interface IProps {
  children: any;
  tag: keyof JSX.IntrinsicElements;
  color?: string;
  className?: any;
  size?: string;
  padding?: string;
  margin?: string;
  align?: string;
  weight?: string;
  textTransform?: string;
  width?: string;
}
const Newake = ({
  tag: Wrapper = "div",
  children,
  color,
  size = "xl",
  margin,
  align,
  weight,
  padding,
  textTransform = "uppercase",
  width = "full",
}: IProps) => {
  return (
    <Wrapper
      className={`font-Newake ${width} text-${size} ${
        margin || "mt-10"
      } ${padding} ${align || "text-center"} ${textTransform}  text-${
        color || "white"
      }`}
    >
      {children}
    </Wrapper>
  );
};

export default Newake;
