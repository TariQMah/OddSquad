import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Index = ({ children, vars }: any) => {
  const el = useRef<any>();

  useLayoutEffect(() => {
    gsap.from(el.current.children, {
      opacity: 0,
      ...vars,
    });
  }, []);

  return <span ref={el}>{children}</span>;
};

export default Index;
