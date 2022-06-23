import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";

const Twitter = () => {
  return (
    <div className="bg-twitter mx-10 text-white text-center align-middle flex flex-row px-5 py-3 rounded-full p-1">
      <AiFillTwitterCircle size={"30px"} className="float-left" fill="white" />
      <p className="w-full font-JosefinSans uppercase leading-6	p-0 m-0 text-center">
        Follow us on twitter
      </p>
    </div>
  );
};

export default Twitter;
