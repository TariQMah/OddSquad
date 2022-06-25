import React from "react";
import TimelineComponent from "./index";

const DesktopTimeLine = () => {
  return (
    <div className="flex md:block hidden justify-between relative align-middle  flex-col ">
      <img src="images/bottleDesktop.png" className="absolute right-0 top-0" />
      <div className="timeline my-20 h-auto relative">
        <img src="images/timelineDesktop.svg" className="absolute -z-10" />

        <TimelineComponent
          text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
          title="Ojo de Dios Mezcal launches"
          date="JUNE 2020"
          icon={true}
          left={"left-80"}
          width="w-10/12"
          headingSize="md:text-4xl"
          textSize="md:text-xl"
          dateSize="md:text-1xl"
          float="float-left"
        />
        <img
          src="images/characterTimeline1.svg"
          className="absolute top-40 -left-8"
        />
        <TimelineComponent
          text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
          title="Ojo de Dios Mezcal launches"
          date="JUNE 2020"
          icon={true}
          top={"top-60 "}
          left={"left-80"}
          width="w-6/12"
          headingSize="md:text-4xl"
          textSize="md:text-xl"
          dateSize="md:text-1xl"
          float="float-left"
        />
        <img
          src="images/characterTimeline2.svg"
          className="right-0 relative mt-4 float-right"
        />
      </div>
      <img src="images/bottleRight.png" className="absolute left-0 bottom-0" />
    </div>
  );
};

export default DesktopTimeLine;
