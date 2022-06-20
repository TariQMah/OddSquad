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

  const timeLine1 = () => {
    let newArr = <any>[colors2[0]];
    gsap.utils.toArray(".section").forEach(function (elem: any, i: number) {
      newArr.push(colors2[i]);

      // gsap.to(".mainScrollScreen", {
      //   scrollTrigger: {
      //     trigger: elem,
      //     scrub: true,

      //     start: "top bottom",
      //     end: "+=100%",
      //     onEnter: () => {
      //       gsap.to(".mainScrollScreen", {
      //         duration: 1,
      //         background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, ${newArr.toString()})`,
      //       });
      //     },
      //   },
      // });

      const bg = gsap.timeline({
        scrollTrigger: {
          trigger: elem,
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=500", // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      });

      bg.to(".mainScrollScreen", {
        background: `${colorsEachScreen[i]}`,
      });
    });

    // gsap.utils.toArray(".section").forEach((section: any, i) => {
    //   gsap.to(".mainScrollScreen", {
    //     immediateRender: false,
    //     scrollTrigger: {
    //       trigger: section,
    //       scrub: true,

    //       start: "top bottom",
    //       end: "+=100%",
    //       onEnter: () => {
    //         gsap.to(".mainScrollScreen", {
    //           duration: 1.0,
    //           background: gsap.getProperty("html", `--bg${i}`),
    //         });
    //       },
    //     },
    //   });
    // });

    // gsap.utils.toArray(".section").forEach((section: any, i) => {
    //   gsap.to(".mainScrollScreen", {
    //     background: `--bg${i}`,
    //     immediateRender: false,
    //     scrollTrigger: {
    //       trigger: section,
    //       scrub: true,
    //       start: "top bottom",
    //       end: "+=100%",
    //     },
    //   });
    // });
  };
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

  return {
    timeLine1,
    graphicScroll,
  };
};

export default gsapActions;
