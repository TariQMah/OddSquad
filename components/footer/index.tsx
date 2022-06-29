import React, { useEffect, useState } from "react";
import Button from "../Inputs/button";
interface IProps {
  showMenu?: boolean;
  footerInView?: boolean;
}
const Index = ({ showMenu, footerInView }: IProps) => {
  return (
    <div
      className={`fixed w-full md:hidden drop-shadow-2xl z-50 	 bottom-0 ${
        showMenu || footerInView ? "hidden" : "block"
      }`}
    >
      <Button text={"CONNECT WALLET"} />
    </div>
  );
};

export default Index;
