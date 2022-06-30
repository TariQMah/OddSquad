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
  letterSpace?: string;
}
const Newake = ({
  tag: Wrapper = "div",
  children,
  color = "white",
  size = "text-lg",
  margin,
  align,
  letterSpace = "tracking-widest",
  weight = "font-normal",
  padding,
  textTransform = "uppercase",
  width = "full",
  media,
}: IProps) => {
  return (
    <Wrapper
      className={`font-Newake tracking-widest	${letterSpace} ${weight} ${width} ${media} ${size} ${
        margin || "mt-10"
      } ${padding} ${
        align || "text-center"
      }   ${textTransform}  text-${color} `}
    >
      {children}
    </Wrapper>
  );
};

export default Newake;
