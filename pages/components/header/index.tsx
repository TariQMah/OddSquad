import React, { useEffect, useState } from "react";
import Link from "next/link";
import useScrollListener from "../../hooks/scrollListner";
import { useInView } from "react-intersection-observer";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Button from "../Inputs/button";
import SocialIcon from "../socialIcons";
import {SVGLogo} from "../../generic/svg";

interface IProps {
  showLogo: boolean;
  menuToggle: () => void;
  showMenu: boolean;
}
const Index = ({ showLogo, showMenu, menuToggle }: IProps) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  //   const [showLogo, setShowLogo] = useState(false);

  return (<span>
  <BrowserView>
      <header className="main-header">
        <div className="container-center">
          <div className="row">
            <div className="col col-left">
              <Link href="/"><SVGLogo/></Link>
            </div>
            <div className="col col-center">
              <nav className="nav-header">
                <ul>
                  <li><Link href="#ourStory">OUR STORY</Link></li>
                  <li><Link href="#nftMemberPass">NFT MEMBERS PASS</Link></li>
                  <li><Link href="#roadmap">ROADMAP</Link></li>
                  <li><Link href="#community">COMMUNITY</Link></li>
                  <li><Link href="#team">TEAM</Link></li>
                  <li><Link href="#faq">FAQ</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col col-right">
              <div className="flex justify-center mt-3">
                <SocialIcon>
                  <img src="images/instagram_white.png" className="" />
                </SocialIcon>
                <SocialIcon>
                  <img src="images/discord_white.png" />
                </SocialIcon>
                <SocialIcon>
                  <img src="images/twitter_white.png" />
                </SocialIcon>
                <Button text={"CONNECT WALLET"} />
              </div>
              
            </div>
          </div>
        </div>
      </header>
  </BrowserView>
  <MobileView>
    <div
      className={`head z-50 flex fixed w-full top-5  ${
        showLogo ? "justify-between" : "justify-center"
      }`}
    >
      <div className="text-center   font-Urbanist">
        {showLogo ? (
          <img src="images/logoSticky.png" className="ml-2" />
        ) : (
          <>
            <h2 className="text-sm text-white uppercase font-bold	">
              Ojo De Dios MEZCAL
            </h2>
            <h4 className="text-xs  font-semibold text-white uppercase">
              PRESENTS
            </h4>
          </>
        )}
      </div>

      <div
        className="burgerMenu absolute right-0 ml-auto p-2"
        onClick={menuToggle}
      >
        {showMenu ? (
          <div className="text-1xl text-white">
            <img src="images/cross.svg" className="text-white" />
          </div>
        ) : (
          <img src="images/nave-burger-menu.png" />
        )}
      </div>
    </div>
    </MobileView>
    </span>
  );
};

export default Index;
