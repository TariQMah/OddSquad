import Link from "next/link";
import React from "react";
import { FiTwitter, FiInstagram } from "react-icons/fi";

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
    <div className="rounder overflow-hidden ">
      <img src={image} className="my-5" />
      <h4 className="text-white font-Newake text-center">{name}</h4>
      <h6 className="text-white font-Newake text-center uppercase text-yellowColor">
        {designation}
      </h6>
      <div className="flex justify-center">
        <div className="bg-white mx-1 rounded-full h-10 w-10 flex justify-center items-center">
          <Link href={twitter}>
            <FiTwitter />
          </Link>
        </div>
        <div className="bg-white mx-1 rounded-full h-10 w-10 flex justify-center items-center">
          <Link href={instagram}>
            <FiInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
