import Link from "next/link";
import React from "react";
import SocialIcon from "../../components/socialIcons";
const DesktopHeader = () => {
  return (
    <div className=" hidden  my-12 mx-6 md:grid grid-cols-12 gap-4 justify-between">
      <div className="logo col-span-2	">
        <img src="images/desktopLogo.png" />
      </div>
      <div className="flex col-span-8 justify-center items-center">
        <h3 className="text-white mx-8 font-JosefinSans font-medium text-lg">
          <Link href={"#"}>OUR STORY</Link>
        </h3>
        <h3 className="text-white mx-8 font-JosefinSans font-medium text-lg">
          <Link href={"#"}>NFT MEMBERS PASS</Link>
        </h3>
        <h3 className="text-white mx-8 font-JosefinSans font-medium text-lg">
          <Link href={"#"}>ROADMAP</Link>
        </h3>
        <h3 className="text-white mx-8 font-JosefinSans font-medium text-lg">
          <Link href={"#"}>COMMUNITY</Link>
        </h3>
        <h3 className="text-white mx-8 font-JosefinSans font-medium text-lg">
          <Link href={"#"}>TEAM</Link>
        </h3>
        <h3 className="text-white font-JosefinSans font-medium text-lg">
          <Link href={"#"}>FAQ</Link>
        </h3>
      </div>
      <div className="col-span-2">
        <div className="flex justify-center mt-3">
          <SocialIcon size="13">
            <img src="images/instagram_white.png" className="" />
          </SocialIcon>
          <SocialIcon size="13">
            <img src="images/discord_white.png" />
          </SocialIcon>
          <SocialIcon size="13">
            <img src="images/twitter_white.png" />
          </SocialIcon>
          <div className="rounded-full py-4 px-3 flex justify-center items-center  font-JosefinSans text-black bg-white">
            {" "}
            Connect Wallet
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
