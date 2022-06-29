import Link from "next/link";
import React from "react";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import JosefinSans from "../text/josefinSans";

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
    <div className=" text-center md:mx-4">
      <h4 className="text-white text-5xl font-Newake text-center">“</h4>
      <h6 className="text-white font-JosefinSans text-center md:text-lg ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </h6>

      <div className="text-center">
        <img
          src="images/avatar.png"
          className="rounded-full mt-8 mb-5 mx-auto"
        />
        <h4 className="font-Newake text-white text-3xl md:text-4xl">
          Tom Youngs
        </h4>
        <JosefinSans
          tag="h4"
          margin="mb-5 md:1xl"
          textTransform="normal-case"
          align="left"
          size={`text-lg`}
          color="yellow-300"
        >
          NFT EXPERT
        </JosefinSans>
        <div className="flex justify-center my-2">
          <div className="mx-1 rounded-full md:h-12 md:w-12 h-7 w-7 flex justify-center items-center">
            <Link href={twitter}>
              <img src="images/twitter_white.png" alt="twitter" />
            </Link>
          </div>
          <div className="mx-1 rounded-full md:h-12 md:w-12 h-7 w-7 flex justify-center items-center">
            <Link href={instagram}>
              <img src="images/instagram_white.png" alt="instagram" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
