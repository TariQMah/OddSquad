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
    graphicScrollDesktop,
    shape2,
    marquee,
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
    marquee(marqueeText);
    return () => {
      // bgTimeLine();
      graphicScroll();
      graphicScrollDesktop();
      shape2();
      bottomShape();
    };
  }, []);

  // useEffect(() => {
  //   stickyCard();
  // }, [stickyCard]);

  const menuToggle = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  const readMoreText = useMemo(() => {
    return `Spirit Guides are intermediaries between spiritual and
    human spheres provided by the gods for shaman
    apprentices Spirit Guides are intermediaries between spiritual and
    human spheres provided by the gods for shaman
    apprentices Spirit Guides are intermediaries between spiritual and
    human spheres provided by the gods for shaman
    apprentices Spirit Guides are intermediaries between spiritual and
    human spheres provided by the gods for shaman
    apprentices`;
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
          <div className="h-full my-12">
            <Link
              activeClass="active"
              to="home"
              spy={false}
              smooth={true}
              hashSpy={false}
              offset={50}
              duration={500}
              delay={100}
              onClick={() => menuToggle()}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              <img
                src={"images/logoMobileMenu.png"}
                className="mx-auto object-contain mb-20"
                width={120}
                height={120}
              />
            </Link>
            <Link
              activeClass="active"
              to="home"
              spy={false}
              smooth={true}
              hashSpy={false}
              offset={50}
              duration={500}
              delay={100}
              onClick={() => menuToggle()}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
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
              offset={50}
              duration={500}
              delay={100}
              isDynamic={true}
              onClick={() => menuToggle()}
              ignoreCancelEvents={false}
              spyThrottle={500}
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
              offset={50}
              duration={500}
              delay={100}
              isDynamic={true}
              onClick={() => menuToggle()}
              ignoreCancelEvents={false}
              spyThrottle={500}
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
              offset={50}
              duration={500}
              delay={100}
              isDynamic={true}
              onClick={() => menuToggle()}
              ignoreCancelEvents={false}
              spyThrottle={500}
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
              offset={50}
              duration={500}
              delay={100}
              isDynamic={true}
              onClick={() => menuToggle()}
              ignoreCancelEvents={false}
              spyThrottle={500}
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
              offset={50}
              duration={500}
              delay={100}
              isDynamic={true}
              onClick={() => menuToggle()}
              ignoreCancelEvents={false}
              spyThrottle={500}
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
              <SocialIcon>
                <img src="images/instagram_white.png" className="" />
              </SocialIcon>
              <SocialIcon>
                <img src="images/discord_white.png" />
              </SocialIcon>
              <SocialIcon>
                <img src="images/twitter_white.png" />
              </SocialIcon>
            </div>
            <Button text={"CONNECT WALLET"} />
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
            <div className="logo mt-10 z-30 relative flex justify-center">
              <img src="images/mainLogo.png" className="md:hidden" />
              <img
                src="images/desktopCharacter.png"
                className="hidden md:block w-8/12"
              />
            </div>

            <img
              src="images/vectorBg.svg"
              className="absolute z-0 top-10 bottom-auto w-full md:hidden"
            />

            <img
              src="images/mountains.svg"
              className="absolute z-10 top-10 bottom-auto hidden md:block"
            />
            <div className="md:hidden">
              <Newake tag="h4">MINT AVAILABLE Q3 2022</Newake>
              <Button text={"CONNECT WALLET"} />

              <Newake tag="h4" className={"md:hidden"}>
                JOIN OUR COMMUNITY
              </Newake>

              <div className="flex justify-center mt-3">
                <SocialIcon link="https://www.instagram.com/ojodedios/">
                  <img src="images/instagram_white.png" className="" />
                </SocialIcon>
                <SocialIcon>
                  <img src="images/discord_white.png" />
                </SocialIcon>
                <SocialIcon>
                  <img src="images/twitter_white.png" />
                </SocialIcon>
              </div>
            </div>
            {/* <div className="hidden md:block mb-20"> ARROW WILL REMOVE IN FINAL VERSION
              <div className="bg-opacity-70 bg-white w-12 h-12 rounded-full border border-white flex justify-center items-center mx-auto">
                <BiDownArrowAlt className="h-6 w-6 text-white " />
              </div>
            </div> */}
          </div>

          <div
            className="screen2 section md:container md:mx-auto"
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

              <Newake
                tag="h4"
                media="md:text-1xl"
                size="text-lg"
                color="yellow-400"
              >
                Our Story
              </Newake>

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
                  <div className="md:w-auto md:relative  w-full md:mr-60">
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
            <div className="screen4 md:container md:mx-auto py-40 z-10 relative section">
              <div className="bg-gray-900  md:w-8/12 bg-opacity-0.3 border flex justify-center items-center border-white border-2  overflow-hidden min-h-60 md:h-auto  w-10/12 m-auto rounded-2xl h-32 relative">
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
                  width="100%"
                  height={"500"}
                  onClick={() => toggleVideo()}
                  ref={videoRef}
                >
                  <source src="/images/video.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="bg-black bg-opacity-0.3 md:my-20 md:py-20  md:px-20    px-7 py-5  my-5 md:h-auto   w-10/12 m-auto rounded-2xl  relative">
                <div className="flex  flex-row flex-1 align-top">
                  <img src="images/book-open.svg" className="w-5 h-5" />
                  <div className="">
                    <h4 className="w-5/12 mt-0 ml-2 text-left text-sm md:text-xl text-yellow-400">
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
                      {readMore
                        ? readMoreText
                        : readMoreText.length > 150
                        ? readMoreText.substring(0, 150 - 3) + "..."
                        : readMoreText}
                    </Newake>

                    <div className="mt-5">
                      <div
                        className="cursor-pointer p-0 m-0 ml-2  flex items-center  text-white"
                        onClick={() => setReadMore(!readMore)}
                      >
                        {readMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        <JosefinSans
                          tag="h4"
                          color="white"
                          opacity="text-opacity-50"
                          size="text-xs"
                          weight="font-bold"
                          textTransform="uppercase"
                          margin="m-0 ml-2"
                        >
                          {readMore ? "Read Less " : " READ MORE"}
                        </JosefinSans>
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
            <Newake
              tag="h4"
              media=""
              size="text-lg md:text-1xl"
              color="yellow-400"
            >
              NFT MEMBERS PASS
            </Newake>
            <div className=" w-full -z-10 overflow-hidden whitespace-nowrap ">
              <Marquee className="marquee" speed={100}>
                <JosefinSans
                  tag="h4"
                  color="white"
                  width="w-auto"
                  size="text-8xl  md:text-10xl"
                  className={"marqueeText"}
                  weight="font-extrabold	"
                  textTransform="uppercase"
                  margin="mt-0"
                >
                  JOIN THE SQUAD JOIN THE SQUAD JOIN THE SQUAD JOIN THE SQUAD
                  JOIN THE SQUAD JOIN THE SQUAD
                </JosefinSans>
              </Marquee>
            </div>

            <ProductCard />
            <div className="text-center  flex justify-center relative">
              <img
                src="images/logoText.png"
                className="absolute -z-10 -top-2"
              />
              <div className="text-center">
                <h3 className="text-white w-auto text-4xl font-Newake font-extrabold uppercase mt-28 z-10">
                  Member&apos;s Pass
                </h3>

                <h2 className="text-white w-auto text-8xl	 font-Newake font-semibold mt-2 uppercase  z-10">
                  3,333
                </h2>
                <p className="text-4xl my-6 font-Newake px-4 text-white text-center ">
                  We’re opening the books to our coveted member’s club. Join the
                  ODDSquad as an OG member to ensure you always get the best
                  perks on offer.
                </p>

                <p className="text-4xl my-6 font-Newake px-4 text-white text-center ">
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
                className="object-contain sticky  w-7/12 mediaCardImage"
              />
            </div>
            <div className=" w-6/12   justify-center relative">
              <div className="text-center w-10/12  flex justify-center relative">
                <img
                  src="images/logoText.png"
                  className="absolute z-10 -top-2"
                />
                <div className="text-center">
                  <h3 className="text-white w-auto text-4xl font-Newake font-extrabold uppercase mt-28 z-10">
                    Member&apos;s Pass
                  </h3>

                  <h2 className="text-white w-auto text-8xl	 font-Newake font-semibold mt-2 uppercase  z-10">
                    3,333
                  </h2>
                  <p className="text-2xl my-6 font-Newake px-4 text-white text-center ">
                    We’re opening the books to our coveted member’s club. Join
                    the ODDSquad as an OG member to ensure you always get the
                    best perks on offer.
                  </p>

                  <p className="text-2xl my-6 font-Newake px-4 text-white text-center ">
                    Journey with us into our Odd World for In-Real-Life
                    experiences, limited editions, exclusive parties and tones
                    of Web3 goodies. The OddSquad Member’s Pass will be your
                    ticket to ride.
                  </p>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="text-center w-10/12 my-96 flex justify-center relative">
                <div className="text-center">
                  <p className="text-2xl my-6 font-Newake px-4 text-white text-center ">
                    We’re opening the books to our coveted member’s club. Join
                    the ODDSquad as an OG member to ensure you always get the
                    best perks on offer.
                  </p>

                  <p className="text-2xl my-6 font-Newake px-4 text-white text-center ">
                    Journey with us into our Odd World for In-Real-Life
                    experiences, limited editions, exclusive parties and tones
                    of Web3 goodies. The OddSquad Member’s Pass will be your
                    ticket to ride.
                  </p>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="text-center w-10/12 my-96 ">
                <Newake
                  tag="h4"
                  media=""
                  margin="mb-4"
                  size="text-lg md:text-1xl"
                  color="yellow-400"
                >
                  OG MEMBER BENEFITS
                </Newake>
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

          <div className="screen6 md:hidden z-10 my-32  relative section">
            <Newake
              tag="h4"
              media=""
              margin="mb-4"
              size="text-lg md:text-1xl"
              color="yellow-400"
            >
              OG MEMBER BENEFITS
            </Newake>
            <div className="">
              <Benefits>
                Free OddSquad <br /> profile pictures
              </Benefits>
              <Benefits>
                Exclusive invites to IRL events
                <br /> and VIP access
              </Benefits>
              <Benefits>
                Collaborations with top Mexican <br /> Artists, airdropped to
                holders
              </Benefits>
              <Benefits subHeading={"*legal stipulations apply"}>
                Free bottles of mezcal* <br /> and merch drops
              </Benefits>
              <Benefits>
                Access to one off Limited Edition
                <br /> bottles of Ojo de Dios Mezcal
              </Benefits>
              <Benefits>
                Be part of the first Metaverse
                <br /> community for mezcal lovers
              </Benefits>
            </div>
          </div>

          <div className="screen7 z-10 my-32 relative md:flex section">
            <div className="w-full md:flex md:justify-center md:flex-col md:w-6/12 ">
              <Newake
                tag="h4"
                margin="mb-4 md:mb-0"
                color="yellow-400"
                size="text-lg md:text-1xl"
              >
                JOIN THE QUEST
              </Newake>
              <div className="flex justify-between md:align-top md:justify-start   align-middle mt-10 md:mt-0  flex-col h-3/5">
                <p className="text-4xl my-6 font-Newake px-4 md:mx-auto  text-white text-center md:w-7/12  ">
                  Follow us for a whitelist spot and join the whitelist spot
                </p>
                <div className=" md:mx-auto  m:w-8/12">
                  <SocialButton
                    text="Follow us on twitter"
                    icon={
                      <AiFillTwitterCircle
                        size={"30px"}
                        className="float-left"
                        fill="white"
                      />
                    }
                  />
                  <h4 className="font-Newake text-center mt-5 text-white text-5xl capitalize">
                    20,471
                  </h4>
                  <p className="text-xl text-center text-white font-Newake capitalize">
                    CURRENT FOLLOWRES
                  </p>
                </div>
              </div>
            </div>
            <div className="md:block hidden md:w-6/12 md:mr-20">
              <img src="images/keyArt_Cafe.png" />
            </div>
          </div>

          <div className="screen8 z-10 relative section" id="roadMap">
            <Newake
              tag="h4"
              margin="mb-4"
              size="text-lg md:text-1xl"
              color="yellow-400"
            >
              ROADMAP
            </Newake>
            <div
              className="marquee w-full -z-10 overflow-hidden whitespace-nowrap "
              id="no01"
            >
              <Marquee className="marquee" speed={100}>
                <JosefinSans
                  tag="h4"
                  color="white"
                  size="text-8xl"
                  width="w-auto"
                  className={"marqueeText"}
                  weight="font-extrabold"
                  textTransform="uppercase"
                  margin="mt-0"
                >
                  Our Journey Our Journey Our Journey Our Journey Our Journey
                </JosefinSans>
              </Marquee>
            </div>
            <div className="container md:mx-auto hidden md:block">
              <DesktopTimelineComponent />
            </div>
            <MobileTimelineComponent />
          </div>

          <div className="screen9 z-10 relative section" id="community">
            <div className="md:hidden">
              <Newake tag="h4" margin="mb-4" size="text-lg" color="yellow-400">
                COMMUNITY
              </Newake>
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
                  bgColor="bg-purple-500"
                  text="JOIN OUR DISCORD"
                  icon={
                    <BsDiscord
                      size={"30px"}
                      className="float-left"
                      fill="white"
                    />
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
                <Newake
                  tag="h4"
                  margin="mb-4"
                  size="text-lg md:text-1xl"
                  color="yellow-400"
                >
                  COMMUNITY
                </Newake>
                <div className="w-6/12 mx-auto">
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
                  <div className="w-6/12 mx-auto ">
                    <SocialButton
                      bgColor="bg-purple-500"
                      text="JOIN OUR DISCORD"
                      link="#"
                      icon={
                        <BsDiscord
                          size={"30px"}
                          className="float-left"
                          fill="white"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="screen10 z-10 md:my-40 relative section" id="team">
            <Newake
              tag="h4"
              margin="mb-4"
              textTransform="md:uppercase"
              color="yellow-400"
              size="text-lg md:text-1xl"
            >
              The Team
            </Newake>
            <div className="  w-full md:w-6/12 md:mx-auto -z-10 overflow-hidden">
              <Newake
                tag="h4"
                color="white"
                size="text-4xl md:text-5xl"
                width="w-9/12"
                className={"marqueeText"}
                weight="font-extrabold"
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
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <PeopleCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <PeopleCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <PeopleCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <PeopleCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <PeopleCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <PeopleCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <PeopleCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <PeopleCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <PeopleCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <PeopleCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
              <div>
                <PeopleCard
                  name="Michael"
                  designation="Founder"
                  twitter="#"
                  instagram="#"
                  image="images/Michael.jpg"
                />
              </div>
            </Slider>
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

          <div className="screen12 z-10 mt-48 mb-48 relative section" id="faq">
            <Newake
              tag="h4"
              margin="mb-4"
              textTransform="md:uppercase"
              color="yellow-400"
              size="text-lg md:text-1xl"
            >
              FAQ&apos;s
            </Newake>
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
                    offset={50}
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
                    offset={50}
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
                    offset={50}
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
                    offset={50}
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
                    offset={50}
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
                    offset={50}
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

                  <div className="flex  justify-center mt-3">
                    <SocialIcon link="https://www.instagram.com/ojodedios/">
                      <img src="images/instagram_white.png" className="" />
                    </SocialIcon>
                    <SocialIcon link="https://discord.com/invite/EnkXWmqc">
                      <img src="images/discord_white.png" />
                    </SocialIcon>
                    <SocialIcon>
                      <img src="images/twitter_white.png" />
                    </SocialIcon>
                  </div>
                  <div className="my-6 md:my-0">
                    <Button text={"CONNECT WALLET"} />
                  </div>
                </div>
              </div>
              <p className="text-white mt-12 px-7  flex mx-auto items-center justify-start font-JosefinSans text-xs">
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
