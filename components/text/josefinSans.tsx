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
  opacity?: string;
}
const JosefinSans = ({
  tag: Wrapper = "div",
  children,
  color,
  opacity,
  size,
  margin,
  align,
  weight,
  padding,
  textTransform = "uppercase",
  width,
  ...rest
}: IProps) => {
  return (
    <Wrapper
      {...rest}
      className={`font-JosefinSans   ${width} ${size} ${
        margin || "mt-10"
      } ${padding} ${
        align || "text-center"
      } ${textTransform} ${opacity} ${weight} text-${color || "white"}`}
    >
      {children}
    </Wrapper>
  );
};

export default JosefinSans;