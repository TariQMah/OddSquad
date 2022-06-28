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
    <Link href={link}>
      <div
        className={`${margin} h-${size} w-${size} rounded-full flex justify-center items-center`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Index;
