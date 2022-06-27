import React from "react";
interface IProps {
  topHeading?: string;
  category?: string;
  bottomHeading?: string;
  image?: string;
  link?: string;
}
const Index = ({ topHeading, bottomHeading, image, link }: IProps) => {
  return (
    <div className="bg-purpleColor my-10 p-10 flex justify-center justify-between flex-col rounded-3xl h-96 mx-5">
      <div className="text-center">
        <h4 className="font-Newake leading-5 uppercase">Art Work</h4>
        <h4 className="font-Newake leading-5  uppercase">Coming Soon</h4>
      </div>
      <div className="text-center flex justify-center">
        <img src="images/skullGraphic.svg" />
      </div>
      <div className="text-center">
        <h4 className="font-Newake leading-5  uppercase">Art Work</h4>
        <h4 className="font-Newake leading-5  uppercase">Coming Soon</h4>
      </div>
    </div>
  );
};

export default Index;
