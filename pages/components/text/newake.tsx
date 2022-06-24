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
  media?: string;
}
const Newake = ({
  tag: Wrapper = "div",
  children,
  color,
  size = "text-lg",
  margin,
  align,
  weight,
  padding,
  textTransform = "uppercase",
  width = "full",
  media,
}: IProps) => {
  return (
    <Wrapper
      className={`font-Newake ${width} ${media} ${size} ${
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
