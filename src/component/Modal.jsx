import { motion } from "framer-motion";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    open: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const moveCursorLabely = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLabelX(clientX);
      moveCursorLabely(clientY);
    });
  }, []);

  return (
    // modal container
    <>
      <motion.div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        ref={container}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className="h-[350px] sm:w-[400px] w-[350px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center"
      >
        {/* modal slider */}
        <div
          style={{ top: index * -100 + "%" }}
          className="h-full w-full absolute transition-all duration-500 ease-custom "
        >
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className="h-full w-full flex items-center justify-center relative"
              >
                <img className="w-[300px] h-auto" src={src} alt="image" />
              </div>
            );
          })}
        </div>
      </motion.div>
      {/* cursor */}
      <motion.div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className="w-[80px] h-[80px] rounded-[50%] bg-[#455CE9] text-white  z-10 flex items-center justify-center text-[14px] font-medium pointer-events-none"
      ></motion.div>
      {/* cursor lab;e */}
      <motion.div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className="w-[80px] h-[80px] rounded-[50%] bg-transparent text-white z-10 flex items-center justify-center text-[14px] font-medium pointer-events-none"
      >
        View
      </motion.div>
    </>
  );
};

export default Modal;
