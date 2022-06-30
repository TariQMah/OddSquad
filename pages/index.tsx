import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Link,
  Button as ScrollButton,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Controller, Scene } from "react-scrollmagic";
import ReactPlayer from "react-player";
import { AiFillTwitterCircle } from "react-icons/ai";

import { BiDownArrowAlt } from "react-icons/bi";
import Marquee from "react-fast-marquee";

import { FiArrowLeft } from "react-icons/fi";

import { BsDiscord, BsInstagram } from "react-icons/bs";
import type { NextPage } from "next";
import Head from "next/head";
import { gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Button from "../components/Inputs/button";
import SocialIcon from "../components/socialIcons";
import ChatBubble from "../components/chatBubble";
import Slider from "react-slick";

import Header from "../components/header";
import Footer from "../components/footer";
import gsapActions from "../hooks/gsapActions";
import { useInView } from "react-intersection-observer";
import Newake from "../components/text/newake";
import JosefinSans from "../components/text/josefinSans";
import ProductCard from "../components/productCart";
import Benefits from "../components/benefits";
import SocialButton from "../components/socialButtons/twitter";
import MobileTimelineComponent from "../components/timeline/mobile";
import DesktopTimelineComponent from "../components/timeline/desktop";

import PeopleCard from "../components/peopleCard";
import TestimonialsCard from "../components/testimonialCard";
import Accordion from "../components/accordion";
import { accordionData } from "../utils/accordion";

import DesktopHeader from "../components/header/desktop";
import { Timeline, Tween } from "react-gsap";
const Home: NextPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const boxRef = useRef<any>();
  const menu = useRef<any>();
  const marqueeText = useRef<any>();
  const videoRef = useRef<any>();

  const {
    graphicScroll,
    // stickyCard,
    graphicScrollRight,
    graphicScrollDesktop,
    shape2,
    bottomShape,
  } = gsapActions(boxRef);
  gsap.registerPlugin(ScrollTrigger);

  const [ref, inView] = useInView({
    threshold: 0,
  });
  const [footerRef, footerInView] = useInView();

  const toggleVideo = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  const peopleSetting = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,

    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
    ],
  };

  const testimonialsSetting = {
    dots: true,
    infinite: true,
    className: "slick2 my-20",
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          centerMode: true,
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          centerMode: true,
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    // bgTimeLine();
    graphicScroll();
    graphicScrollDesktop();
    bottomShape();
    shape2();
    graphicScrollRight();
    return () => {
      // bgTimeLine();
      graphicScroll();
      graphicScrollDesktop();
      shape2();
      graphicScrollRight();
      bottomShape();
    };
  }, []);

  const menuToggle = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  const readMoreText = useMemo(() => {
    return `In the beginning Watacame*, tended to his harvest, in the dark fields, until one day the great deity Grandma Rain**, came down to earth, instructed him to build a raft and started the great flood.  Life and light was born into the world, but also gods and spirits were released to walk among us.  Over time a great unbalance fell upon this world and the spirit world. <br><br>

    Our hero Oddball, is a shaman, a spirit guide*** that lives between these two worlds..  He is our guide to our ODD World and all that is Mexico.  One day Oddball saw a vision in the fire, about this great cosmic unrest and Watacame spoke to him, ”To help your people and those in the material and spirit world, you must bring back balance to the cosmos, you must undertake a quest for the four elements****.  Only then will balance be restored.”  <br><br>
    
    Join Oddball as he sets out on his first quest, to understand where it all started, EARTH.  Journey to Oaxaca, the rolling Espadin agave fields and into the mountains of San Luis Del Rio to discover the Earth spirit.<br><br>
    
    *Watacame – In Huichol folk lore, Watacame is the first human to walk the earth, with his loyal dog Tziku Mayuri<br><br>
    
    **Grandma Rain - There are many gods in Huichol lore, old and new, human and animal in form.  Grandma Rain is considered the highest of deities, the giver of life, mother nature<br><br>
    
    ***Spirit Guide - Spirit Guides are intermediaries between spiritual and human spheres provided by the gods. The guide can appear in dreams or visions and are often half-human, half animal.. Shamans are considered para-normal in their powers and are an integral link between the Huichol people and the deities.<br><br>
    
    **** Huichol Quest for the Four Elements – Huichol art and tradition is centered around the balance of the four elements (Earth, Fire, Water and Air)`;
  }, []);
  return (
    <div id="home">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showMenu && (
        <div
          className="menu fixed z-50 w-full overflow-hidden bg-black opacity-90 backdrop-blur-md	 h-full"
          ref={menu}
        >
          <div className="h-full my-7">
            <Link
              activeClass="active"
              to="home"
              spy={false}
              smooth={true}
              hashSpy={false}
              offset={-100}
              duration={500}
              delay={100}
              onClick={() => menuToggle()}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <img
                src={"images/logoMobileMenu.png"}
                className="object-contain relative left-5 top-2 mb-20"
                width={120}
                height={120}
              />
            </Link>
            <Link
              activeClass="active"
              to="ourStory"
              spy={false}
              smooth={true}
              hashSpy={false}
              offset={50}
              duration={500}
              delay={100}
              onClick={() => menuToggle()}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <JosefinSans
                tag="h2"
                size="text-3xl"
                weight="font-extrabold"
                margin="mt-1"
                padding="mt-1"
              >
                Our Story
              </JosefinSans>
            </Link>
            <Link
              activeClass="active"
              to="nftMemberPass"
              spy={false}
              smooth={true}
              hashSpy={false}
              offset={-100}
              duration={500}
              delay={100}
              isDynamic={true}
              onClick={() => menuToggle()}
              ignoreCancelEvents={false}
            >
              <JosefinSans
                tag="h2"
                size="text-3xl"
                weight="font-extrabold"
                margin="mt-1"
                padding="mt-1"
              >
                NFT MEMEBRS PASS
              </JosefinSans>
            </Link>
            <Link
              activeClass="active"
              to="roadMap"
              spy={false}
              smooth={true}
              hashSpy={false}
              offset={-100}
              duration={500}
              delay={100}
              isDynamic={true}
              onClick={() => menuToggle()}
              ignoreCancelEvents={false}
            >
              <JosefinSans
                tag="h2"
                size="text-3xl"
                weight="font-extrabold"
                margin="mt-1"
                padding="mt-1"
              >
                ROADMAP
              </JosefinSans>
            </Link>
            <Link
              activeClass="active"
              to="community"
              spy={false}
              smooth={true}
              hashSpy={false}
              offset={-100}
              duration={500}
              delay={100}
              isDynamic={true}
              onClick={() => menuToggle()}
              ignoreCancelEvents={false}
            >
              <JosefinSans
                tag="h2"
                size="text-3xl"
                weight="font-extrabold"
                margin="mt-1"
                padding="mt-1"
              >
                community
              </JosefinSans>
            </Link>
            <Link
              activeClass="active"
              to="team"
              spy={false}
              smooth={true}
              hashSpy={false}
              offset={-100}
              duration={500}
              delay={100}
              isDynamic={true}
              onClick={() => menuToggle()}
              ignoreCancelEvents={false}
            >
              <JosefinSans
                tag="h2"
                size="text-3xl"
                weight="font-extrabold"
                margin="mt-1"
                padding="mt-1"
              >
                team
              </JosefinSans>
            </Link>
            <Link
              activeClass="active"
              to="faq"
              spy={false}
              smooth={true}
              hashSpy={false}
              offset={-50}
              duration={500}
              delay={100}
              isDynamic={true}
              onClick={() => menuToggle()}
              ignoreCancelEvents={false}
            >
              <JosefinSans
                tag="h2"
                size="text-3xl"
                weight="font-extrabold"
                margin="mt-1"
                padding="mt-1"
              >
                FAQ
              </JosefinSans>
            </Link>
            <Newake tag="h4" size="text-lg">
              JOIN OUR COMMUNITY
            </Newake>

            <div className="flex justify-center mt-5">
              <SocialIcon link="https://www.instagram.com/ojodedios/">
                <img src="images/instagram_white.png" className="" />
              </SocialIcon>
              <SocialIcon link="https://discord.com/invite/EnkXWmqc">
                <img src="images/discord_white.png" />
              </SocialIcon>
              <SocialIcon link="https://twitter.com/oddsquadnft">
                <img src="images/twitter_white.png" />
              </SocialIcon>
            </div>
            <div className="hidden">
              <Button text={"CONNECT WALLET"} />
            </div>
          </div>
        </div>
      )}
      <div
        className=" mx-auto overflow-hidden mainScrollScreen wrap "
        ref={boxRef}
      >
        <div className="bg-black text-left px-7 py-4 hidden md:block">
          <p className="text-white flex mx-auto  font-JosefinSans items-center text-[10px]">
            <FiArrowLeft className="mr-2" />
            <span>VISIT OJODEDIOS.COM</span>
          </p>
        </div>

        <div className="overlayPattern">
          <DesktopHeader />
          <Header
            showMenu={showMenu}
            menuToggle={menuToggle}
            showLogo={inView}
          />
          <div className="screen1 section relative" ref={ref}>
            <div className="logo mt-32 z-30 relative flex justify-center">
              <img src="images/mainLogo.png" className="md:hidden" />
              <img
                src="images/desktopCharacter.png"
                className="hidden md:block w-8/12  md:mr-0 -mr-20"
              />
            </div>

            <img
              src="images/vectorBg.svg"
              className="absolute z-0 -top-16 bottom-auto w-full md:hidden"
            />

            <img
              src="images/mountains.svg"
              className="absolute z-10 top-10 md:-top-8 bottom-auto hidden md:block"
            />
            <div className="md:hidden">
              <Newake size="text-sm" tag="h4" letterSpace="tracking-wider">
                MINT AVAILABLE Q3 2022
              </Newake>
              <Link
                activeClass="active"
                to="ourStory"
                spy={false}
                smooth={true}
                hashSpy={false}
                offset={-100}
                duration={500}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
                className="hidden"
              >
                <Button text={"CONNECT WALLET"} />
              </Link>
              <Newake
                size="text-sm"
                className={"md:hidden"}
                tag="h4"
                margin="m-0"
                letterSpace="tracking-wider"
              >
                JOIN OUR COMMUNITY
              </Newake>

              <div className="flex justify-center mt-3">
                <SocialIcon link="https://www.instagram.com/ojodedios/">
                  <img src="images/instagram_white.png" className="h-13 w-13" />
                </SocialIcon>
                <SocialIcon link="https://discord.com/invite/EnkXWmqc">
                  <img src="images/discord_white.png" className="h-13 w-13" />
                </SocialIcon>
                <SocialIcon link="https://twitter.com/oddsquadnft">
                  <img src="images/twitter_white.png" className="h-13 w-13" />
                </SocialIcon>
              </div>
            </div>
          </div>

          <div
            className="screen2 section pt-28 pb-5 md:py-0 md:container md:mx-auto"
            id="ourStory"
          >
            <div className="w-full py-12  relative text-center">
              <img
                src="images/bottleRight.png"
                className="absolute right-0 top-0 md:hidden"
              />
              <img
                src="images/bottleDesktop.png"
                className="absolute right-0 top-0 hidden md:block md:top-30"
              />

              <h4 className="font-JosefinSans text-sm md:text-lg tracking-widest font-[700] uppercase yellowColor">
                Our Story
              </h4>

              <Newake
                tag="h2"
                size="text-2xl"
                media="md:text-5xl"
                color="white"
                padding="px-2"
                margin="mt-5 mb-20  md:mx-auto"
                textTransform="inherit"
                width=" md:w-8/12"
              >
                Ojo de Dios is the eye to the soul of Mexico, a MASTER award
                winning Mezcal from Oaxaca Mexico. <br />
                <br />
                The OddSquad is the world’s first NFT-powered members club for
                mezcal lovers, coming 2022.
              </Newake>
              <img
                src="images/bottleLeft.png"
                className="absolute left-0 bottom-0 md:hidden"
              />
              <img
                src="images/bottleBlackDesktop.png"
                className="absolute left-0 bottom-0 md:block hidden"
              />
            </div>
          </div>
          <div className="relative h-full">
            <div className="screen3  md:container md:mx-auto  z-10 relative section">
              <div className="w-full py-12 px-2 relative text-center group ">
                <div className=" md:flex md:justify-center">
                  <img
                    src="images/desktopCharacterBlack.png"
                    className="w-auto h-auto object-contain hidden md:block"
                  />
                  <div className="md:w-auto md:relative  w-full md:mr-44">
                    <ChatBubble
                      align="left"
                      message={"Hola!"}
                      left={"left-12 md:left-15"}
                      fontSize={"md:text-1xl"}
                    />
                    <ChatBubble
                      align="right"
                      message={
                        "I’m Oddball, leader of the OddSquad and your spirit guide to all that is Ojo de Dios, mezcal and Mexico."
                      }
                      left={"left-0 md:left-28"}
                      fontSize={"md:text-1xl"}
                    />
                    <ChatBubble
                      align="left"
                      message={
                        "I’m here to ask you for your help on my quest for the 4 elements..."
                      }
                      left={"left-5 md:left-0"}
                      fontSize={"md:text-1xl"}
                    />
                    <ChatBubble
                      align="right"
                      message={"Care to join?"}
                      left={"left-0 md:left-28"}
                      fontSize={"md:text-1xl"}
                    />

                    <img
                      src="images/graphicCharacter.png"
                      className="absolute z-0 -bottom-9 md:hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              src="images/bgShape1.png"
              id="shape1"
              className="absolute bgShape1 z-0 ml-60 md:mr-0 md:ml-auto md:hidden "
            />
            <img
              src="images/desktopCloud.png"
              id="shapeDesktop1"
              className="absolute bgShape1 z-0  md:block -right-96 -mr-36"
            />
            <div className="screen4 md:container md:mx-auto pt-40 pb-10 z-10 relative section">
              <div className="bg-gray-900  md:w-8/12 bg-opacity-0.3  flex justify-center items-center border-white border-2  overflow-hidden min-h-60 md:h-auto  w-10/12 m-auto rounded-2xl  relative">
                {!isPlaying && (
                  <div
                    className="ml-24 cursor-pointer top-auto bottom-auto flex absolute  items-center"
                    onClick={() => toggleVideo()}
                  >
                    <div className="icon">
                      <img src="images/playButton.svg" className="" />
                    </div>

                    <div className="text-left">
                      <Newake
                        margin="mt-0 ml-2"
                        align="text-left"
                        size="text-sm"
                        tag="h4"
                      >
                        PLAY OUR FILM
                      </Newake>
                    </div>
                  </div>
                )}

                <video
                  onClick={() => toggleVideo()}
                  ref={videoRef}
                  className="w-full md:aspect-video aspect-[16/9]"
                >
                  <source src="/images/video.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="bg-black bg-opacity-0.3 md:my-20 md:py-20  md:px-20    px-7 py-5  my-5 md:h-auto   w-10/12 m-auto rounded-2xl  relative">
                <div className="flex  flex-row flex-1 align-top">
                  <img src="images/book-open.svg" className="w-5 h-5" />
                  <div className="w-full">
                    <h4 className="md:w-5/12 w-12/12 mt-0 ml-2 font-JosefinSans font-bold text-left text-sm md:text-xl text-[#FBB551]">
                      THE QUEST FOR THE 4 ELEMENTS
                    </h4>

                    <Newake
                      width="w-12/12"
                      margin="mt-5 ml-2"
                      align="text-left"
                      size="text-sm md:text-3xl"
                      tag="h4"
                      color="white"
                      textTransform="inherit"
                      weight="font-normal"
                    >
                      {readMore ? (
                        <div
                          dangerouslySetInnerHTML={{ __html: readMoreText }}
                        />
                      ) : readMoreText.length > 150 ? (
                        readMoreText.substring(0, 150 - 3) + "..."
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{ __html: readMoreText }}
                        />
                      )}
                    </Newake>

                    <div className="mt-5">
                      <div
                        className="cursor-pointer p-0 m-0 ml-2  flex items-center  text-white"
                        onClick={() => setReadMore(!readMore)}
                      >
                        {readMore ? <IoIosArrowUp /> : <IoIosArrowDown />}

                        <h4 className="md:w-5/12 w-12/12 mt-0 ml-2 font-JosefinSans font-bold text-left text-xs md:text-xl text-[#FBB551]">
                          {readMore ? "Read Less " : " READ MORE"}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="screen5 md:hidden z-10 relative section"
            id="nftMemberPass"
          >
            <img
              src="images/bgGraphic2.svg"
              id="shape2"
              className="absolute z-0 -ml-40 "
            />
            <h4 className="font-JosefinSans text-center text-sm md:text-lg tracking-widest font-[700] uppercase yellowColor">
              NFT MEMBERS PASS
            </h4>

            <div className=" w-full -z-10 my-3 overflow-hidden whitespace-nowrap ">
              <Marquee className="marquee" speed={100}>
                <Newake
                  tag="h4"
                  color="white"
                  width="w-auto"
                  letterSpace="tracking-normal"
                  size="text-8xl  md:text-10xl"
                  className={"marqueeText"}
                  weight="font-normal"
                  textTransform="uppercase"
                  margin="mt-0"
                >
                  JOIN THE SQUAD JOIN THE SQUAD JOIN THE SQUAD JOIN THE SQUAD
                  JOIN THE SQUAD JOIN THE SQUAD
                </Newake>
              </Marquee>
            </div>

            <ProductCard />
            <div className="text-center  flex justify-center relative">
              <img src="images/logoText.png" className="absolute -z-10 top-5" />
              <div className="text-center">
                <h3 className="text-white w-auto text-4xl font-Newake font-extrabold uppercase mt-28 z-10">
                  Member&apos;s Pass
                </h3>

                {/* <h2 className="text-white w-auto text-8xl	 font-Newake font-semibold mt-2 uppercase  z-10">
                  3,333
                </h2> */}
                <p className="text-3xl md:text-4xl my-6 font-Newake px-8 text-white text-center ">
                  We’re opening the books to our coveted member’s club. Join the
                  ODDSquad as an OG member to ensure you always get the best
                  perks on offer.
                </p>

                <p className="text-3xl md:text-4xl my-24 font-Newake px-8 text-white text-center ">
                  Journey with us into our Odd World for In-Real-Life
                  experiences, limited editions, exclusive parties and tones of
                  Web3 goodies. The OddSquad Member’s Pass will be your ticket
                  to ride.
                </p>
              </div>
              <div className="clear-both"></div>
            </div>
          </div>

          <div className="screen5-1 hidden md:block md:flex relative section">
            <div className="mediaCard w-6/12 mx-auto mt-10 text-center flex justify-center items-start">
              <img
                src="images/cardNew.png"
                className="object-contain sticky  w-6/12 mediaCardImage -rotate-12"
              />
            </div>
            <div className=" w-6/12   justify-center relative">
              <div className="text-center w-10/12  flex justify-center relative">
                <img
                  src="images/logoText.png"
                  className="absolute z-10 top-2"
                />
                <div className="text-center">
                  <h3 className="text-white w-auto tracking-wider	  text-4xl font-Newake font-extrabold uppercase mt-28 z-10">
                    Member&apos;s Pass
                  </h3>

                  {/* <h2 className="text-white w-auto text-[200px] leading-none		 font-Newake font-semibold mt-2 uppercase  z-10">
                    3,333
                  </h2> */}
                  <p className="text-2xl my-6 font-Newake px-12 text-white text-center ">
                    We’re opening the books to our coveted member’s club. Join
                    the ODDSquad as an OG member to ensure you always get the
                    best perks on offer.
                  </p>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="text-center w-10/12 my-96 flex justify-center relative">
                <div className="text-center">
                  <p className="text-4xl my-6 font-Newake px-12 text-white text-center ">
                    Journey with us into our Odd World for In-Real-Life
                    experiences, limited editions, exclusive parties and tones
                    of Web3 goodies. The OddSquad Member’s Pass will be your
                    ticket to ride.
                  </p>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="text-center w-10/12 my-48 ">
                <h4 className="font-JosefinSans text-center text-sm md:text-lg tracking-widest font-[700] uppercase yellowColor">
                  OG MEMBER BENEFITS
                </h4>

                <div className="grid grid-cols-2">
                  <Benefits>Free OddSquad profile pictures</Benefits>
                  <Benefits>
                    Exclusive invites to IRL events and VIP access
                  </Benefits>
                  <Benefits>
                    Collaborations with top Mexican Artists, airdropped to
                    holders
                  </Benefits>
                  <Benefits subHeading={"*legal stipulations apply"}>
                    Free bottles of mezcal* and merch drops
                  </Benefits>
                  <Benefits>
                    Access to one off Limited Edition bottles of Ojo de Dios
                    Mezcal
                  </Benefits>
                  <Benefits>
                    Be part of the first Metaverse community for mezcal lovers
                  </Benefits>
                </div>
                <div className="clear-both"></div>
              </div>
            </div>
          </div>

          <div className="screen6 md:hidden z-10 md:my-32 mt:16 relative section">
            <h4 className="font-JosefinSans mb-4 text-center text-sm md:text-lg tracking-normal font-[700] uppercase yellowColor">
              OG MEMBER BENEFITS
            </h4>
            <div className="">
              <Benefits>Free OddSquad profile pictures</Benefits>
              <Benefits>
                Exclusive invites to IRL events and VIP access
              </Benefits>
              <Benefits>
                Collaborations with top Mexican Artists, airdropped to holders
              </Benefits>
              <Benefits subHeading={"*legal stipulations apply"}>
                Free bottles of mezcal* and merch drops
              </Benefits>
              <Benefits>
                Access to one off Limited Edition bottles of Ojo de Dios Mezcal
              </Benefits>
              <Benefits>
                Be part of the first Metaverse community for mezcal lovers
              </Benefits>
            </div>
          </div>

          <div className="screen7 z-10 my-32 relative md:flex section">
            <div className="w-full md:flex md:justify-center md:flex-col md:w-6/12 ">
              <h4 className="font-JosefinSans mb-4 md:mb-0 text-center text-sm md:text-lg tracking-normal font-[700] uppercase yellowColor">
                JOIN THE QUEST
              </h4>

              <div className="flex justify-between md:align-top md:justify-start   align-middle  md:mt-0  flex-col h-3/5">
                <p className="text-5xl md:mb-12  my-6 font-Newake px-4 md:mx-auto  text-white text-center md:w-9/12  ">
                  Follow us for a whitelist spot and join the whitelist spot
                </p>
                <img
                  src="images/bgPattern.png"
                  className="relative -z-10 -mt-20 md:hidden"
                />
                <div className=" md:mx-auto m:w-8/12">
                  <SocialButton
                    text="Follow us on twitter"
                    link="https://twitter.com/oddsquadnft"
                    icon={
                      <AiFillTwitterCircle
                        size={"30px"}
                        className="float-left"
                        fill="white"
                      />
                    }
                  />
                  <h4 className="font-Newake text-center mt-5 md:mt-5 text-white text-5xl capitalize">
                    20,471
                  </h4>
                  <p className="text-xl text-center text-white font-Newake capitalize">
                    CURRENT FOLLOWRES
                  </p>
                </div>
              </div>
            </div>
            <div className="md:block hidden md:w-6/12 md:mr-32">
              <img src="images/keyArt_Cafe.png" />
            </div>
          </div>

          <div className="screen8 z-10 relative section" id="roadMap">
            <h4 className="font-JosefinSans mb-4 md:mb-0 text-center text-sm md:text-lg tracking-normal font-[700] uppercase yellowColor">
              ROADMAP
            </h4>
            <div
              className="marquee w-full -z-10 overflow-hidden whitespace-nowrap "
              id="no01"
            >
              <Marquee className="marquee" speed={100}>
                <Newake
                  tag="h4"
                  color="white"
                  size="text-8xl"
                  width="w-auto"
                  letterSpace="tracking-normal"
                  className={"marqueeText"}
                  weight="font-normal"
                  textTransform="uppercase"
                  margin="mt-0"
                >
                  Our Journey Our Journey Our Journey Our Journey Our Journey
                </Newake>
              </Marquee>
            </div>
            <div className="container md:mx-auto hidden md:block">
              <DesktopTimelineComponent />
            </div>
            <MobileTimelineComponent />
          </div>

          <div className="screen9 z-10 my-28 relative section" id="community">
            <div className="md:hidden">
              <h4 className="font-JosefinSans mb-4 md:mb-0 text-center text-sm md:text-lg tracking-normal font-[700] uppercase yellowColor">
                COMMUNITY
              </h4>
              <div className=" w-full -z-10 overflow-hidden" id="no01">
                <Newake
                  tag="h4"
                  color="white"
                  size="text-5xl"
                  width="w-9/12"
                  className={"marqueeText"}
                  weight="font-extrabold	"
                  textTransform="uppercase"
                  margin="mb-3 mx-auto"
                  align="text-center"
                >
                  JOIN US BY THE FIRE
                </Newake>

                <SocialButton
                  bgColor="bg-[#7C50FB]"
                  text="JOIN OUR DISCORD"
                  link="https://discord.com/invite/EnkXWmqc"
                  icon={
                    <img src="images/discord_white.png" className="w-8 h-8" />
                  }
                />
              </div>
              <img
                src="images/graphic_bg3.png"
                className="w-full mx-auto my-10"
              />
            </div>
            <div className="hidden   md:block">
              <img src="images/fireimage.jpeg" className=" -z-10" />
              <div className="z-40 top-0 w-full absolute pb-60 pt-32">
                <h4 className="font-JosefinSans mb-4 md:mb-0 text-center text-sm md:text-lg tracking-normal font-[700] uppercase yellowColor">
                  COMMUNITY
                </h4>
                <div className="w-6/12 mx-auto">
                  <Newake
                    tag="h4"
                    color="white"
                    size="text-5xl"
                    width="w-9/12"
                    letterSpace="tracking-normal"
                    className={"marqueeText"}
                    weight="font-extrabold	"
                    textTransform="uppercase"
                    margin="mb-3 mx-auto"
                    align="text-center"
                  >
                    JOIN US BY THE FIRE
                  </Newake>
                  <div className="w-6/12 mx-auto ">
                    <SocialButton
                      bgColor="bg-[#7C50FB]"
                      text="JOIN OUR DISCORD"
                      link="https://discord.com/invite/EnkXWmqc"
                      icon={
                        <img
                          src="images/discord_white.png"
                          className="h-9 w-9"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="screen10 z-10 md:my-40 relative section" id="team">
            <h4 className="font-JosefinSans mb-4 md:mb-0 text-center text-sm md:text-lg tracking-wide font-[700] uppercase yellowColor">
              The Team
            </h4>
            <div className="  w-full md:w-6/12 md:mx-auto -z-10 overflow-hidden">
              <Newake
                tag="h4"
                color="white"
                size="text-4xl md:text-5xl"
                width="w-9/12"
                className={"marqueeText"}
                letterSpace="tracking-normal"
                weight="font-normal"
                textTransform="inherit md:uppercase"
                margin="mb-3 mx-auto"
                align="text-center"
              >
                Crafted with love by our team of experts
              </Newake>
            </div>
            <Slider className="my-10 md:ml-24" {...peopleSetting}>
              <div>
                <PeopleCard
                  name="Michael"
                  designation="Founder"
                  twitter="https://twitter.com/the_Clokey"
                  instagram="#"
                  image="images/team5.png"
                />
              </div>

              <div>
                <PeopleCard
                  name="Eduardo"
                  designation="Founder"
                  twitter="https://twitter.com/eduardoagaveuk"
                  instagram="#"
                  image="images/team2.png"
                />
              </div>
              <div>
                <PeopleCard
                  name="Sam"
                  designation="Founder"
                  twitter="https://twitter.com/SamBElliott"
                  instagram="#"
                  image="images/team1.png"
                />
              </div>
              <div>
                <PeopleCard
                  name="Barry"
                  designation="Founder"
                  twitter="https://twitter.com/MrADBHalstead"
                  instagram="#"
                  image="images/team3.png"
                />
              </div>
              <div>
                <PeopleCard
                  name="Cynthia"
                  designation="MASTER BLENDER"
                  twitter="#"
                  instagram="#"
                  image="images/team4.png"
                />
              </div>

              <div>
                <PeopleCard
                  name="Raul"
                  designation="Creative Director"
                  twitter="https://twitter.com/thundervolve"
                  instagram="#"
                  image="images/peopelImage.png"
                />
              </div>
              <div>
                <PeopleCard
                  name="Rafahu"
                  designation="Artists Season One"
                  twitter="#"
                  instagram="https://www.instagram.com/rafahu/"
                  image="images/peopelImage.png"
                />
              </div>
              <div>
                <PeopleCard
                  name="Tom"
                  designation="Content King"
                  twitter="https://twitter.com/TheTomYoungs"
                  instagram="#"
                  image="images/peopelImage.png"
                />
              </div>
              <div>
                <PeopleCard
                  name="Rohail"
                  designation="Blockchain Master"
                  twitter="https://twitter.com/Diana_the_King"
                  instagram="#"
                  image="images/peopelImage.png"
                />
              </div>
              <div>
                <PeopleCard
                  name="Dianna"
                  designation="OG Rocks Comms"
                  twitter="https://twitter.com/_Limitlesss_"
                  instagram="#"
                  image="images/team8.jpeg"
                />
              </div>
              <div>
                <PeopleCard
                  name="Roman"
                  designation="Roll Community Manager"
                  twitter="https://twitter.com/evaseiko"
                  instagram="#"
                  image="images/team6.jpeg"
                />
              </div>
              <div>
                <PeopleCard
                  name="Eva"
                  designation="Og Rocks Comms"
                  twitter="#"
                  instagram="#"
                  image="images/team7.jpeg"
                />
              </div>
            </Slider>
            <img
              src="images/rightGraphicBg.png"
              id="shapeBottomRight"
              className="absolute w-[700px] top-0 -z-50 -right-40 md:-right-80 "
            />
          </div>

          <div className="screen11 z-10 relative section">
            <Slider {...testimonialsSetting}>
              <div>
                <TestimonialsCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <TestimonialsCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <TestimonialsCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <TestimonialsCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <TestimonialsCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <TestimonialsCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
            </Slider>
          </div>

          <div
            className="screen12 z-10 md:mt-48 md:mb-48 mt-12 mb-28 relative section"
            id="faq"
          >
            <h4 className="font-JosefinSans mb-12 md:mb-0 text-center text-lg md:text-lg tracking-wide font-[700] uppercase yellowColor">
              FAQ<span className="text-sm md:text-xs">s</span>
            </h4>
            <div className="md:w-6/12 w-full  md:mx-auto">
              <div className="accordion">
                {accordionData.map(({ title, content }, index) => (
                  <Tween
                    key={index}
                    from={{ opacity: 0, y: `${index}0` }}
                    to={{ opacity: 100, y: `-${index}0` }}
                  >
                    <Accordion key={index} title={title} content={content} />
                  </Tween>
                ))}
              </div>
            </div>
            <img
              src="images/bgGraphic2.svg"
              id="shapeBottom"
              className="absolute z-0 -ml-40 "
            />
          </div>

          <div className="screen13 z-10  relative section" ref={footerRef}>
            <div className="footer mx-3 py-5 mb-7 md:py-10 bg-black rounded-2xl">
              <div className="w-full md:flex md:justify-between md:px-5">
                <div className="md:w-3/12 flex md:mr-20 md:relative items-start">
                  <img
                    src="images/footerLogo.svg"
                    className="mx-auto md:absolute md:-top-6 my-2"
                  />
                </div>
                <div className="text-center md:w-5/12 md:text-left">
                  <Link
                    activeClass="active"
                    to="ourStory"
                    spy={false}
                    smooth={true}
                    hashSpy={false}
                    offset={-100}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    <h4 className="text-white uppercase text-sm font-JosefinSans">
                      Our Story
                    </h4>
                  </Link>
                  <Link
                    activeClass="active"
                    to="nftMemberPass"
                    spy={false}
                    smooth={true}
                    hashSpy={false}
                    offset={-100}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    <h4 className="text-white uppercase text-sm font-JosefinSans">
                      NFT MEMEBRS PASS
                    </h4>
                  </Link>
                  <Link
                    activeClass="active"
                    to="roadMap"
                    spy={false}
                    smooth={true}
                    hashSpy={false}
                    offset={-100}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    <h4 className="text-white uppercase text-sm font-JosefinSans">
                      ROADMAP
                    </h4>
                  </Link>
                  <Link
                    activeClass="active"
                    to="community"
                    spy={false}
                    smooth={true}
                    hashSpy={false}
                    offset={-100}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    <h4 className="text-white uppercase text-sm font-JosefinSans">
                      community
                    </h4>
                  </Link>
                  <Link
                    activeClass="active"
                    to="team"
                    spy={false}
                    smooth={true}
                    hashSpy={false}
                    offset={-100}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    <h4 className="text-white uppercase text-sm font-JosefinSans">
                      team
                    </h4>
                  </Link>
                  <Link
                    activeClass="active"
                    to="faq"
                    spy={false}
                    smooth={true}
                    hashSpy={false}
                    offset={-100}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    <h4 className="text-white uppercase text-sm font-JosefinSans">
                      FAQ
                    </h4>
                  </Link>
                </div>
                <div className="md:flex md:w-4/12 md:justify-end md:items-start">
                  <div className="md:hidden">
                    <Newake tag="h4" weight="font-light" size="text-lg">
                      JOIN OUR COMMUNITY
                    </Newake>
                  </div>

                  <div className="flex  justify-center mt-3 md:-mt-3">
                    <SocialIcon
                      margin="md:mx-0"
                      link="https://www.instagram.com/ojodedios/"
                    >
                      <img
                        src="images/instagram_white.png"
                        className="h-12 w-12"
                      />
                    </SocialIcon>
                    <SocialIcon link="https://discord.com/invite/EnkXWmqc">
                      <img
                        src="images/discord_white.png"
                        className="h-12 w-12"
                      />
                    </SocialIcon>
                    <SocialIcon
                      link="https://twitter.com/oddsquadnft"
                      margin="md:mx-0"
                    >
                      <img
                        src="images/twitter_white.png"
                        className="h-12 w-12"
                      />
                    </SocialIcon>
                  </div>
                  <div className="my-6 md:my-0 md:ml-6 hidden md:-mt-5">
                    <Button text={"CONNECT WALLET"} />
                  </div>
                </div>
              </div>
              <p className="text-white mt-12 px-7  flex mx-auto items-center justify-center md:justify-start font-JosefinSans text-xs">
                <FiArrowLeft className="mr-2" />
                VISIT OJODEDIOS.COM
              </p>
            </div>
          </div>
          {!inView && (
            <Footer footerInView={footerInView} showMenu={showMenu} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
