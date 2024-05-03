import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import css from "../assets/images/css.png";
import express from "../assets/images/express.png";
import github from "../assets/images/github.png";
import html from "../assets/images/html.png";
import js from "../assets/images/js.png";
import mongodb from "../assets/images/mongodb.png";
import node from "../assets/images/node-js.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import tailwind from "../assets/images/tailwind.png";
import typescript from "../assets/images/typescript.png";
import Magnetic from "../component/Magnetic";
import { setIsHover } from "../redux/reducer/circle";

const Skills = ({theme}) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(null);

  const getImageName = (imagePath) => {
    const imageName = imagePath.split("/").pop().split("?")[0];
    return imageName.replace(".png", "").toUpperCase();
  };
  const images = [
    html,
    css,
    js,
    typescript,
    react,
    tailwind,
    node,
    express,
    mongodb,
    redux,
    github,
  ];

  const doubleImages = [...images, ...images];

  // animations
  const heading = "My Programming Skills";

  return (
    <>
      {/* Adding keyframes */}
      <style>{`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>

      <section
        id="Skills"
        className="section1 min-h-[100vh] sm:h-[95] w-[86vw]  ml-auto mr-auto flex justify-center items-center flex-col md:gap-32 sm:gap-16 gap-14 mt-8 sm:mt-10 overflow-hidden "
      >
        {/* image slider */}
        <div className="md:w-[90%] w-[100%] ml-auto mr-auto mt-20 sm:mt-0 ">
          <motion.div  className={`w-[100%]  overflow-hidden p-2 flex gap-[60%]  ${theme==="light"?"logos":"darklogos"} `}>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1.4, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{
                animation: "slide 21s infinite linear",
              }}
              className="log-slide flex flex-nowrap  "
            >
              {doubleImages.map((image, index) => (
                <motion.img
                  onMouseEnter={() => dispatch(setIsHover(true))}
                  onMouseLeave={() => dispatch(setIsHover(false))}
                  key={index}
                  className="md:h-[50px] sm:h-[40px] h-[30px] ml-[60px] mr-[60x] filter grayscale opacity-[80%] hover:grayscale-0 hover:opacity-100 hover:cursor-pointer"
                  src={image}
                  alt={image}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* other container */}
        <div className="flex h-fit flex-col md:flex-row ">
          {/* about me  */}
          <div className="md:w-[10%] w-full flex flex-row md:flex-col justify-start md:pt-12 items-center gap-6 md:space-y-4 px-4 ">
            <div
              className=" uppercase text-[#5E5E5E] rotate-0 md:rotate-[-90deg] dark:text-[#9e9e9e] "
            >
              my skills
            </div>
            <div className="line md:h-[40px] md:w-[2px] bg-[#5E5E5E] h-[2px]  w-[80px]"></div>
          </div>

          {/* right side */}
          <div className="flex flex-col md:flex-row items-start md:w-[90%] w-full px-4 md:gap-8 gap:6 mt-4">
            <div className="left flex-1">
              <motion.h2 className="">
                {heading.split(" ").map((word, index) => {
                  return (
                    <span
                      className="font-bold text-3xl lg:text-5xl pb-2 inline-block dark:text-white"
                      key={index}
                    >
                      {word}&nbsp;
                    </span>
                  );
                })}
              </motion.h2>
              <p className="text-[#5E5E5E] dark:text-[#9e9e9e]">
                I`m a seasoned full-stack developer proficient in React,
                Node.js, and Express.js with expertise in HTML, CSS, and
                Tailwind CSS for frontend development.
              </p>
            </div>

            {/* right */}
            <div className="right flex-1 flex flex-col gap-4 items-center justify-center mt-6 md:mt-0 md:w-full w-[95%]">
              <div className="skills-container text-justify  w-full grid  grid-cols-5 place-content-center gap-1 md:gap-5 items-center">
                {images.map((image, index) => (
                  <Magnetic key={index}>
                    <div
                      className="relative flex items-center justify-center w-full h-full mb-4 drop-shadow-lg overflow-hidden "
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <img
                        src={image}
                        alt={getImageName(image)}
                        className="w-[40px]"
                      />

                      <div
                        className={`bg-[#303030] absolute bottom-full left-1/2  z-20 mb-5 -translate-x-1/2 whitespace-nowrap rounded-[5px] py-1  px-3 text-sm text-white ${
                          hover === index ? `opacity-100` : `opacity-0`
                        }`}
                      >
                        <span className="bg-dark bg-[#303030] text-white absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45"></span>
                        {getImageName(image)}
                      </div>
                    </div>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
