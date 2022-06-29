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
    <div className="my-10 flex justify-center justify-between flex-col mx-5">
      <img src="images/cardNew.png" className="w-10/12 mx-auto" />
    </div>
  );
};

export default Index;
