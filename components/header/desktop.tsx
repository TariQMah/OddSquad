import Link from "next/link";
import React from "react";
import SocialIcon from "../../components/socialIcons";
const DesktopHeader = () => {
  return (
    <div className=" hidden  mb-12 mx-6 md:grid grid-cols-12 gap-4 justify-between">
      <div className="logo col-span-2	">
        <img src="images/desktopLogo.png" />
      </div>
      <div className="flex col-span-7 justify-center items-center">
        <h3 className="text-white mx-5 font-JosefinSans font-medium text-md">
          <Link href={"#"}>OUR STORY</Link>
        </h3>
        <h3 className="text-white mx-5 font-JosefinSans font-medium text-md">
          <Link href={"#"}>NFT MEMBERS PASS</Link>
        </h3>
        <h3 className="text-white mx-5 font-JosefinSans font-medium text-md">
          <Link href={"#"}>ROADMAP</Link>
        </h3>
        <h3 className="text-white mx-5 font-JosefinSans font-medium text-md">
          <Link href={"#"}>COMMUNITY</Link>
        </h3>
        <h3 className="text-white mx-5 font-JosefinSans font-medium text-md">
          <Link href={"#"}>TEAM</Link>
        </h3>
        <h3 className="text-white mx-5 font-JosefinSans font-medium text-md">
          <Link href={"#"}>FAQ</Link>
        </h3>
      </div>
      <div className="col-span-3 items-center justify-end flex">
        <div className="flex items-center justify-end">
          <SocialIcon margin="mx-0" size="8">
            <img src="images/instagram_white.png" className="" />
          </SocialIcon>
          <SocialIcon size="8" margin="mx-1">
            <img src="images/discord_white.png" />
          </SocialIcon>
          <SocialIcon size="8" margin="mx-0">
            <img src="images/twitter_white.png" />
          </SocialIcon>
          <div className="rounded-full ml-6 uppercase py-3 px-6 flex justify-center items-center text-[13px] font-[700] font-JosefinSans text-black bg-white">
            Connect Wallet
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
