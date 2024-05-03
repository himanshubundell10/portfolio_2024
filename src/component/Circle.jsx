import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Circle = () => {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);

  useLayoutEffect(() => {
    const cursor = cursorRef.current;
    const cursor2 = cursor2Ref.current;

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });

      gsap.to(cursor2, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { isHover } = useSelector((state) => state.circle);

  return (
    <div className="block">
      <div
        ref={cursorRef}
        className=" cursor border border-black dark:border-white rounded-full "
        style={{
          width: isHover ? "70px" : "42px",
          height: isHover ? "70px" : "42px",
        }}
      ></div>
      <div ref={cursor2Ref} className="cursor2 bg-black dark:bg-white"></div>
    </div>
  );
};

export default Circle;
