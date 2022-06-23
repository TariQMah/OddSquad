import React, { useEffect, useState } from "react";
import useScrollListener from "../../hooks/scrollListner";
import { useInView } from "react-intersection-observer";

interface IProps {
  showLogo: boolean;
  menuToggle: () => void;
  showMenu: boolean;
}
const Index = ({ showLogo, showMenu, menuToggle }: IProps) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  //   const [showLogo, setShowLogo] = useState(false);

  return (
    <div
      className={`head z-50 flex fixed w-full top-5  ${
        showLogo ? "justify-between" : "justify-center"
      }`}
    >
      <div className="text-center   font-Urbanist ">
        {showLogo ? (
          <img src="images/logoSticky.png" className="ml-2" />
        ) : (
          <>
            <h2 className="text-sm text-white uppercase font-bold	">
              Ojo De Dios MEZCAL
            </h2>
            <h4 className="text-xs  font-semibold text-white uppercase">
              PRESENTS
            </h4>
          </>
        )}
      </div>

      <div
        className="burgerMenu absolute right-0 ml-auto p-2"
        onClick={menuToggle}
      >
        {showMenu ? (
          <div className="text-1xl text-white">
            <img src="images/cross.svg" className="text-white" />
          </div>
        ) : (
          <img src="images/nave-burger-menu.png" />
        )}
      </div>
    </div>
  );
};

export default Index;
