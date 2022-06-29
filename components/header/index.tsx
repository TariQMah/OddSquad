import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

interface IProps {
  showLogo: boolean;
  menuToggle: () => void;
  showMenu: boolean;
}
const Index = ({ showLogo, showMenu, menuToggle }: IProps) => {
  return (
    <div
      className={`head md:hidden z-[999]  flex fixed w-full top-5  ${
        !showLogo ? "justify-between" : "justify-center"
      }`}
    >
      {!showMenu && (
        <div className="text-center   font-Urbanist mt-6">
          <Link
            activeClass="active"
            to="home"
            spy={false}
            smooth={true}
            hashSpy={false}
            offset={50}
            duration={500}
            delay={100}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            {!showLogo ? (
              <img src="/svg-img/logo.svg" className="ml-4" />
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
          </Link>
        </div>
      )}

      <div
        className="burgerMenu absolute z-50 right-0 ml-auto p-2"
        onClick={() => menuToggle()}
      >
        {showMenu ? (
          <div className="text-1xl text-white mr-2 mt-6">
            <img src="images/cross.svg" className="text-white" />
          </div>
        ) : (
          <img className="mr-2 mt-6" src="images/nave-burger-menu.png" />
        )}
      </div>
    </div>
  );
};

export default Index;
