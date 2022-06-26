import React from "react";
import TimelineComponent from "./index";

const MobileTimeLine = () => {
  return (
    <div className="flex md:hidden justify-between relative align-middle  flex-col  ">
      <img src="images/bottleRight.png" className="absolute right-0 top-0" />
      <div className="timeline my-20 relative">
        <img src="images/timeline.svg" className="absolute -z-10" />

        <TimelineComponent
          text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
          title="Ojo de Dios Mezcal launches"
          date="JUNE 2020"
          icon={true}
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
          icon={false}
          margin="mt-16"
          width="w-60"
        />
        <TimelineComponent
          text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
          title="Ojo de Dios Mezcal launches"
          date="JUNE 2020"
          icon={false}
          margin="mt-10"
          width="w-10/12"
        />
        <TimelineComponent
          text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
          title="Ojo de Dios Mezcal launches"
          date="JUNE 2020"
          icon={false}
          margin="mt-7"
          width="w-11/12"
        />

        <img
          src="images/characterTimeline2.svg"
          className="right-0 relative mt-4 float-right"
        />
        <TimelineComponent
          text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
          title="Ojo de Dios Mezcal launches"
          date="JUNE 2020"
          icon={false}
          margin="mt-11"
          width="w-10/12"
        />
        <TimelineComponent
          text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
          title="Ojo de Dios Mezcal launches"
          date="JUNE 2020"
          icon={false}
          margin="mt-20"
          width="w-11/12"
          top="top-1"
        />
        <TimelineComponent
          text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
          title="Ojo de Dios Mezcal launches"
          date="JUNE 2020"
          icon={false}
          margin="mt-32"
          width="w-9/12"
        />
      </div>
      <img src="images/bottleRight.png" className="absolute left-0 bottom-0" />
    </div>
  );
};

export default MobileTimeLine;
