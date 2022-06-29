import Link from "next/link";
import React from "react";
interface IProps {
  name: string;
  designation: string;
  image: string;
  twitter?: string;
  instagram?: string;
}
const Index = ({
  name,
  designation,
  image,
  twitter = "#",
  instagram = "#",
}: IProps) => {
  return (
    <div className="rounder  overflow-hidden ">
      <div className="bg-gray-50 rounded-3xl mx-2 overflow-hidden">
        <img src={image} className="w-full" />
      </div>
      <h4 className="text-white md:py-0 font-Newake text-center  mb-0 md:text-[38px] leading-none mt-8">
        {name}
      </h4>
      <h6 className="text-white md:py-0 font-JosefinSans text-center tracking-widest	font-bold mt-0 uppercase  mb-3 md:text-1xl  text-yellow-300">
        {designation}
      </h6>
      <div className="flex justify-center">
        <div className=" mx-0  rounded-full h-10 w-10 md:h-13 md:w-13 flex justify-center items-center">
          <Link href={twitter}>
            <img src="images/twitter_white.svg" alt="Twitter" />
          </Link>
        </div>
        <div className=" mx-0  rounded-full h-10 w-10 md:h-13 md:w-13 flex justify-center items-center">
          <Link href={instagram}>
            <img src="images/instagram_white.svg" alt="Instagram" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
