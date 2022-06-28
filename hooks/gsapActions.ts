import React, { useEffect } from "react";
import { gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// const colors = [
//   "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #FBCB50 0%, #FB6F50 7.81%, #FB50A2 17.19%, #CF50FB 28.13%, #7C50FB 38.54%, #5061FB 50.52%, #509FFB 59.37%, #50D2FB 67.19%, #50FBF1 75%, #50FBA9 85.42%, #7CFB50 93.75%, #CAFB50 100%)",
//   "linear-gradient(180deg, #CA5E41 0%, #CA4B66 100%)",
//   "linear-gradient(180deg, #CA4C62 0%, #C84184 100%)",
//   "linear-gradient(180deg, #C84184 0%, #AC41BC 100%)",
//   "linear-gradient(180deg, #AD41BC 0%, #9441C4 100%)",
// ];
const colors2 = [
  "#FB6F50 7.81%",
  "#FB50A2 17.19%",
  "#CF50FB 28.13%",
  "#7C50FB 38.54%",
  "#5061FB 50.52%",
  "#509FFB 59.37%",
  "#50D2FB 67.19%",
  "#50FBF1 75%",
  "#50FBA9 85.42%",
  "#7CFB50 93.75%",
  "#CAFB50 100%",
];

const colorsEachScreen = [
  "linear-gradient(180deg, #CAA141 0%, #CA5843 100%)",
  "linear-gradient(180deg, #CA5E41 0%, #CA4B66 100%)",
  "linear-gradient(180deg, #CA4C62 0%, #C84184 100%)",
  "linear-gradient(180deg, #C84184 0%, #AC41BC 100%)",
  "linear-gradient(180deg, #AD41BC 0%, #9441C4 100%)",
  "linear-gradient(180deg, #873BB3 0%, #7B41CA 100%)",
  "linear-gradient(180deg, #8341CA 0%, #7041CA 100%)",
  "linear-gradient(180deg, #7E41CA 0%, #5E43CA 100%)",
  "linear-gradient(180deg, #6541CA 0%, #5247CA 100%)",
  "linear-gradient(180deg, #5247CA 0%, #3C4ABA 100%)",
  "linear-gradient(180deg, #424ECA 0%, #41A1CA 100%)",
  "linear-gradient(180deg, #41B7C6 0%, #3CBCA4 100%)",
  "linear-gradient(180deg, #41CAAE 0%, #45CA7F 100%)",
  "linear-gradient(180deg, #41CA87 0%, #52CA64 100%)",
  "linear-gradient(180deg, #56CA5C 0%, #82CA41 100%)",
  "linear-gradient(180deg, #56CA5C 0%, #82CA41 100%)",
];
const gsapActions = ({ current }: any) => {
  gsap.registerPlugin(ScrollTrigger);

  // const bgTimeLine = () => {
  //   gsap.utils.toArray(".section").forEach(function (elem: any, i: number) {
  //     const bg = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: elem,
  //         start: "bottom", // when the top of the trigger hits the top of the viewport
  //         end: "+=500", // end after scrolling 500px beyond the start
  //         scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //       },
  //     });

  //     bg.fromTo(
  //       ".mainScrollScreen",
  //       {
  //         background: `${colorsEachScreen[0]}`,
  //         duration: 1,
  //       },
  //       {
  //         background: `${colorsEachScreen[i + 1]}`,
  //         duration: 1,
  //       }
  //     );
  //   });
  // };
  const graphicScroll = () => {
    const bgShape1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen3",
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });

    bgShape1.to("#shape1", {
      top: 400,
      duration: 2,
    });
  };
  const graphicScrollDesktop = () => {
    const bgShape1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen3",
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });

    bgShape1.to("#shapeDesktop1", {
      top: 200,
      duration: 2,
    });
  };
  const shape2 = () => {
    const bgShape2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen5",
        //pin: true,
        start: "top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });

    bgShape2.fromTo(
      "#shape2",
      {
        left: 50, //-100,
        top: 0,
        duration: 1,
        opacity: 0.6,
        zIndex: -1,
      },
      {
        left: 50,
        top: -200,
        duration: 1,
      }
    );
  };

  const bottomShape = () => {
    const bgShape2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".screen12",
        //pin: true,
        start: "top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });

    bgShape2.fromTo(
      "#shapeBottom",
      {
        left: 50, //-100,
        top: 0,
        duration: 1,
        opacity: 1,
        zIndex: -1,
      },
      {
        left: 50,
        top: -200,
        duration: 1,
      }
    );
  };

  const marquee = (marqueeText: any) => {};

  // const stickyCard = () => {
  //   const bgShape1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".screen5-1",
  //       pin: true,
  //       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //     },
  //   });

  //   bgShape1.to(".mediaCardImage", {
  //     top: 0,
  //     duration: 2,
  //     y: 0,
  //   });
  // };
  return {
    // bgTimeLine,
    // stickyCard,
    graphicScroll,
    graphicScrollDesktop,
    shape2,
    marquee,
    bottomShape,
  };
};

export default gsapActions;
