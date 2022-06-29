import React from "react";
import TimelineComponent from "./index";

const MobileTimeLine = () => {
  return (
    <div className="flex md:hidden justify-between relative align-middle px-2 flex-col  ">
      <img
        src="images/bottleRight.png"
        className="absolute right-0 z-50 -top-10"
      />
      <div className="timeline my-10 relative">
        <img src="images/timeline.svg" className="absolute -z-10" />

        <TimelineComponent
          text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
          title="Ojo de Dios Mezcal launches"
          date="JUNE 2020"
          icon={true}
          float="left"
          margin="ml-24"
          width="w-[70%]"
        />
        <img
          src="images/characterTimeline1.svg"
          className="absolute top-40 -left-8"
        />
        <TimelineComponent
          text="We created the world’s first coffee mezcal, ODD Cafe - the darker side of Ojo de Dios"
          title="The world’s first coffee mezcal"
          date="JULY 2021"
          icon={false}
          width="w-[60%]"
          float="left"
          margin="ml-36 mt-11"
        />
        <TimelineComponent
          text="Our first Day of the Dead party, celebrating being the bartender’s mezcal of choice"
          title="A Day of the Dead to remember"
          date="November 2021"
          icon={false}
          margin="mt-[16%] ml-[18%]"
          width="w-[80%]"
          float="left"
        />
        <TimelineComponent
          text="We become the fastest growing mezcal in Europe and are available in some of the best bars and restaurants across 12 countries."
          title="The fastest growing mezcal in Europe"
          date="JUNE 2022"
          icon={false}
          margin="mt-[14%] "
          width="w-11/12"
        />

        <img
          src="images/characterTimeline2.svg"
          className="right-0 relative mt-4 float-right"
        />
        <TimelineComponent
          text="The OddSquad OG Membership Pass goes live, cementing a select few OG members who will help shape the future of Ojo de Dios,."
          title="OddSquad OG Member’s Pass"
          date="JULY 2021"
          icon={false}
          margin="mt-5"
          width="w-10/12"
        />
        <TimelineComponent
          text="The OddSquad’s first collection launches with free mints for all OddSquad OG Members Pass holders.

          Our first exclusive collaberation with Mexican artist Rafahu. A free airdrop for all Chaper One collection holders - hold for a free bottle of mezcal
          
          "
          title="Chapter One: Earth"
          date="November 2021"
          icon={false}
          margin="mt-[24%]"
          width="w-11/12"
          top="top-1"
        />
        <TimelineComponent
          text="IRL exclusive events and access, limited edition releases, free merch and mezcal drops"
          title="Access
          and extras"
          date="JUNE 2020"
          icon={false}
          margin="mt-[25%]"
          width="w-9/12"
        />
      </div>
      <img src="images/bottleRight.png" className="absolute left-0 bottom-0" />
    </div>
  );
};

export default MobileTimeLine;
