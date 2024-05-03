import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Magnetic from "./Magnetic";

const Button = ({ children, backgroundColor = "#3C6FCC", ...attributes }) => {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };
  return (
    <Magnetic>
      <div
      
        className=" rounded-lg overflow-hidden border border-solid border-[rgb(136, 136, 136)] border-[1px] cursor-pointer relative flex items-center justify-center  font-semibold w-full "
        onMouseEnter={(e) => manageMouseEnter(e)}
        onMouseLeave={(e) => manageMouseLeave(e)}
        style={{ backgroundColor }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          // style={{ backgroundColor }}
          className="w-[100%] h-[150%] absolute rounded-[50%] top-[100%]"
        ></div>
      </div>
    </Magnetic>
  );
};

export default Button;
