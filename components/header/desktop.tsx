import {
  Link,
  Button as ScrollButton,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import React from "react";
import SocialIcon from "../../components/socialIcons";
const DesktopHeader = () => {
  return (
    <div className=" hidden md:sticky md:top-5 md:z-50  mb-12 mx-6 md:grid grid-cols-12 gap-4 justify-between">
      <div className="logo col-span-2	">
        <img src="images/desktopLogo.png" />
      </div>
      <div className="flex col-span-7 justify-center items-center">
        <h3 className="text-white mx-5  cursor-pointer font-JosefinSans font-medium text-md">
          <Link
            activeClass="active"
            to="ourStory"
            spy={true}
            smooth={true}
            hashSpy={false}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            OUR STORY
          </Link>
        </h3>
        <h3 className="text-white mx-5  cursor-pointer font-JosefinSans font-medium text-md">
          <Link
            activeClass="active"
            to="nftMemberPass"
            spy={true}
            smooth={true}
            hashSpy={false}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            NFT MEMBERS PASS
          </Link>
        </h3>
        <h3 className="text-white mx-5  cursor-pointer font-JosefinSans font-medium text-md">
          <Link
            activeClass="active"
            to="roadMap"
            spy={true}
            smooth={true}
            hashSpy={false}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            ROADMAP
          </Link>
        </h3>
        <h3 className="text-white mx-5  cursor-pointer font-JosefinSans font-medium text-md">
          <Link
            activeClass="active"
            to="community"
            spy={true}
            smooth={true}
            hashSpy={false}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            COMMUNITY
          </Link>
        </h3>
        <h3 className="text-white mx-5  cursor-pointer font-JosefinSans font-medium text-md">
          <Link
            activeClass="active"
            to="team"
            spy={true}
            smooth={true}
            hashSpy={false}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            TEAM
          </Link>
        </h3>
        <h3 className="text-white mx-5  cursor-pointer  font-JosefinSans font-medium text-md">
          <Link
            activeClass="active "
            to="faq"
            spy={true}
            smooth={true}
            hashSpy={false}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            FAQ
          </Link>
        </h3>
      </div>
      <div className="col-span-3 items-center justify-end flex">
        <div className="flex items-center justify-end">
          <SocialIcon
            link="https://www.instagram.com/ojodedios/"
            margin="mx-0"
            size="8"
          >
            <img src="images/instagram_white.png" className="" />
          </SocialIcon>
          <SocialIcon
            link="https://discord.com/invite/EnkXWmqc"
            size="8"
            margin="mx-1"
          >
            <img src="images/discord_white.png" />
          </SocialIcon>
          <SocialIcon
            link="https://twitter.com/oddsquadnft"
            size="8"
            margin="mx-0"
          >
            <img src="images/twitter_white.png" />
          </SocialIcon>
          <div className="rounded-full hidden ml-6 uppercase py-3 px-6 flex justify-center items-center text-[13px] font-[700] font-JosefinSans text-black bg-white">
            Connect Wallet
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
