import React from "react";
interface IProps {
  message: string;
  left?: string;
  align?: string;
  styles?: string;
  fontSize?: string;
}
const Index = ({
  message,
  left = "",
  align,
  styles = "",
  fontSize,
}: IProps) => {
  return (
    <div
      className={`flex ${
        align === "right" ? "justify-end" : "justify-start"
      } my-10  m-auto  `}
    >
      <div
        className={`inline-block ${left} max-w-xs	px-5 py-4 relative chat-bottom-left  h-auto chat`}
      >
        <p
          className={`text-white break-words font-JosefinSans font-normal text-sm ${fontSize}`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default Index;
