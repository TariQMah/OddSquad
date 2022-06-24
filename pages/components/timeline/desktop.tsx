import React from "react";
import TimelineComponent from "./index";

const DesktopTimeLine = () => {
  return (
    <div className="flex md:block hidden justify-between relative align-middle  flex-col ">
      <img src="images/bottleDesktop.png" className="absolute right-0 top-0" />
      <div className="timeline my-20 relative">
        <img src="images/timelineDesktop.svg" className="absolute -z-10" />

        <TimelineComponent
          text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
          title="Ojo de Dios Mezcal launches"
          date="JUNE 2020"
          icon={true}
          width="w-8/12"
        />
        <img
          src="images/characterTimeline1.svg"
          className="absolute top-40 -left-8"
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
