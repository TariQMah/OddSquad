import Link from "next/link";
import React from "react";
interface IProps {
  children: React.ReactNode;
  size?: string;
  margin?: string;
  link?: string;
}
const Index = ({
  children,
  size = "auto",
  margin = "mx-1",
  link = "#",
}: IProps) => {
  return (
    <Link href={link} passHref>
      <a target="_blank" rel="noopener noreferrer">
        <div
          className={`${margin} h-${size} w-${size} cursor-pointer rounded-full flex justify-center items-center`}
        >
          {children}
        </div>
      </a>
    </Link>
  );
};

export default Index;
