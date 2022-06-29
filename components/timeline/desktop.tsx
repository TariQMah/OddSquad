import React from "react";
import TimelineComponent from "./index";

const DesktopTimeLine = () => {
  return (
    <div className=" my-20 md md:block hidden h-auto">
      <img
        src="images/bottleDesktop.png"
        className="absolute right-32 top-36 w-[200px]"
      />
      <div className="timelineDesktop relative">
        <img
          src="images/timelineDesktop.svg"
          className="object-contain w-fit -left-10  absolute z-10"
        />

        <img
          src="images/characterTimeline2.png"
          className="absolute  z-30 top-0  object-contain max-w-lg ml-8 mt-[400px]"
        />
        <div className="relative ">
          <TimelineComponent
            position="static z-10"
            text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
            title="Ojo de Dios Mezcal launches"
            date="JUNE 2020"
            icon={true}
            left={""}
            width="w-6/12"
            margin="ml-[254px]"
            headingSize="md:text-4xl"
            textSize="md:text-xl"
            dateSize="md:text-1xl"
            float="float-none block"
          />

          <TimelineComponent
            text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
            title="Ojo de Dios Mezcal launches"
            date="JUNE 2020"
            icon={true}
            position="static z-10"
            width="w-4/12"
            headingSize="md:text-4xl"
            textSize="md:text-xl"
            dateSize="md:text-1xl"
            float="float-none block"
            margin="mt-[230px] ml-[750px]"
          />
          <TimelineComponent
            text="We launched our first joven mezcal made from 100% espadin
          agave to market - winning ‘Platinum’ at the prestigious SIPP
          awards"
            title="Ojo de Dios Mezcal launches"
            date="JUNE 2020"
            icon={true}
            top={"top-96"}
            width="w-4/12"
            headingSize="md:text-4xl"
            textSize="md:text-xl"
            dateSize="md:text-1xl"
            position="static z-10"
            margin="mt-[210px] ml-[650px]"
            float="float-none block"
          />

          <TimelineComponent
            text="We become the fastest growing mezcal in Europe and are available in some of the best bars and restaurants across 12 countries."
            title="The fastest growing mezcal in Europe"
            date="JUNE 2020"
            icon={true}
            width="w-4/12"
            headingSize="md:text-4xl"
            textSize="md:text-xl"
            dateSize="md:text-1xl"
            position="static"
            margin="ml-[310px] mt-[140px]"
            float="float-none block"
          />
          <img
            src="images/graphic2.png"
            className="absolute -mt-[112px] w-[400px] right-0"
          />
          <TimelineComponent
            text="The OddSquad OG Membership Pass goes live, cementing a select few OG members who will help shape the future of Ojo de Dios,."
            title="OddSquad OG Member’s Pass"
            date="JUNE 2020"
            icon={false}
            width="w-5/12"
            headingSize="md:text-4xl"
            textSize="md:text-xl"
            dateSize="md:text-1xl"
            position="static"
            margin="ml-[490px] mt-[270px]"
            float="float-none block"
          />

          <img
            src="images/bottleBlackDesktop.png"
            className="absolute  w-[300px] left-[20px] -mt-[300px] "
          />
          <TimelineComponent
            text="The OddSquad’s first collection launches with free mints for all OddSquad OG Members Pass holders.
            Our first exclusive collaberation with Mexican artist Rafahu. A free airdrop for all Chaper One collection holders - hold for a free bottle of mezcal
            "
            title="Chapter One: Earth"
            date="AUTUMN 2020"
            icon={false}
            width="w-6/12"
            headingSize="md:text-4xl"
            textSize="md:text-xl"
            dateSize="md:text-1xl"
            position="relative"
            left="-left-96"
            margin="ml-[400px] mt-[260px]"
            float="float-none block"
          />

          <TimelineComponent
            text="IRL exclusive events and access, limited edition releases, free merch and mezcal drops"
            title="Access and extras"
            date="WINTER 2022"
            icon={false}
            width="w-4/12"
            headingSize="md:text-4xl"
            textSize="md:text-xl"
            dateSize="md:text-1xl"
            position="relative"
            margin="ml-[420px] mt-[320px]"
            float="float-none block"
          />
          <img
            src="images/singleBull.png"
            className="absolute w-[550px] right-[0] -mt-[700px] "
          />
        </div>
        <div className="clear-both"></div>
      </div>
    </div>
  );
};

export default DesktopTimeLine;
