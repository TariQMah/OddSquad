import React from "react";
import TimelineComponent from "./index";

const DesktopTimeLine = () => {
  return (
    <div className=" md md:block hidden h-auto">
      <img src="images/bottleDesktop.png" className="absolute right-0" />
      <div className="timelineDesktop relative ">
        {/* <img
          src="images/timelineDesktop.svg"
          className="object-contain w-auto relative z-10"
        /> */}

        <TimelineComponent
          position="absolute z-10"
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
          float="float-none"
        />
        <div className="md:w-6/12 lg:w-8/12 xl:w-7/12">
          <img
            src="images/characterTimeline2.png"
            className="relative  float-left object-contain max-w-md ml-10 mt-60"
          />
        </div>
        <TimelineComponent
          text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
          title="Ojo de Dios Mezcal launches"
          date="JUNE 2020"
          icon={true}
          top={"top-60"}
          width="md:w-6/12 lg:w-4/12 xl:w-6/12"
          headingSize="md:text-4xl"
          textSize="md:text-xl"
          dateSize="md:text-1xl"
          position=""
          float="float-none"
        />
        <TimelineComponent
          text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
          title="Ojo de Dios Mezcal launches"
          date="JUNE 2020"
          icon={true}
          top={"top-timeline3P"}
          width="md:w-6/12 lg:w-4/12 xl:w-6/12"
          headingSize="md:text-4xl"
          textSize="md:text-xl"
          dateSize="md:text-1xl"
          position=""
          float="float-none"
        />

        <TimelineComponent
          text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
          title="Ojo de Dios Mezcal launches"
          date="JUNE 2020"
          icon={true}
          top={"top-timeline4P"}
          width="md:w-6/12 lg:w-4/12 xl:w-6/12"
          headingSize="md:text-4xl"
          textSize="md:text-xl"
          dateSize="md:text-1xl"
          position=""
          float="float-none"
        />
        <div className="clear-both"></div>
      </div>
      <img src="images/bottleRight.png" className="relative" />
      <div className="clear-both"></div>
    </div>
  );
};

export default DesktopTimeLine;
