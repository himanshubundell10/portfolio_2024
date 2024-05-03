import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Button from "../component/Button";

const About = () => {
  const container = useRef(null);
  const isInView = useInView(container);

  const opacity = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const slidup = {
    initial: {
      y: "100%",
    },
    open: (i) => ({
      y: 0,
      transition: { duration: 0.5, delay: 0.01 * i },
    }),
    closed: { y: "100%" },
    transition: { duration: 0.5 },
  };

  // animation
  const paras1 =
    "Seasoned Full Stack Developer adept at building cutting-edge lex challenges, with a focus on user-centric design and efficient functionality.";
  const paras2 =
    "Hello, i'm Himanshu Bundel a versatile Full Stack Developer with a passion for crafting clean web applications and intuitive functionalities. I thrive on continually eager to learn new skills and tools. While my experience primarily lies in solo full stack projects, I'm poised to embrace collaborative environments, adept in daily stand-ups, source control, and project management. Equipped with expertise across the full stack, I bring a comprehensive skill set to every project, ensuring robust solutions from front-end design to back-end implementation.";

  return (
    <section
      id="About"
      className="section1 flex justify-center items-center h-[100vh] sm:h-[80vh] w-[86vw] m-auto sm:mt-10 mt-16 "
    >
      <div className="flex flex-col md:flex-row h-fit relative ">
        {/* about me  */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:w-[10%] w-full flex flex-row md:flex-col justify-start md:pt-12 items-center gap-6 md:space-y-4 px-4 md:px-0 mt-16 sm:mt-0 "
        >
          <div className=" uppercase text-[#5E5E5E] rotate-0 md:rotate-[-90deg] dark:text-[#9e9e9e]">
            about me
          </div>
          <div className="line md:h-[40px] md:w-[2px] h-[2px]   w-[80px] bg-[#5E5E5E] "></div>
        </motion.div>

        {/* right side */}
        <div
          ref={container}
          className="flex flex-col md:flex-row items-start md:w-[90%] w-full px-4 md:gap-8 gap-6 mt-4"
        >
          <motion.div
            variants={opacity}
            initial="initial"
            animate={isInView ? "open" : "closed"}
            className="left flex-1"
          >
            <h2 className="font-bold text-3xl md:text-5xl pb-2 dark:text-white">
              Who i am?
            </h2>
            <p className="text-[#5E5E5E]">
              {paras1.split(" ").map((word, index) => {
                return (
                  <span
                    key={index}
                    className="overflow-y-hidden relative overflow-hidden inline-flex dark:text-[#9e9e9e] "
                  >
                    <motion.span
                      className="inline-block mr-[4px]"
                      variants={slidup}
                      custom={index}
                      initial="initial"
                      animate={isInView ? "open" : "closed"}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </motion.div>

          {/* other */}
          <motion.div
            variants={opacity}
            initial="initial"
            animate={isInView ? "open" : "closed"}
            className="right flex-1 flex-col"
          >
            <p className="pb-5 font-medium text-justify text-[#5E5E5E] dark:text-[#9e9e9e] ">
              {paras2.split(" ").map((word, i) => {
                return (
                  <span
                    key={i}
                    className="overflow-y-hidden relative overflow-hidden inline-flex hightlight"
                  >
                    <motion.span
                      variants={slidup}
                      custom={i}
                      initial="initial"
                      animate={isInView ? "open" : "closed"}
                      className="mr-[4px]"
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
            <Button
              style={{
                position: "relative",
                // margin: "20px",
                width: "6rem",
                height: "6rem",
                display: "flex",
                borderRadius: "50%",
                color: "white",
                backgroundColor: "#1C1D20",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <p className="z-10 text-xs p-1 text-center">Download CV</p>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

// const Word = ({ children, range, progress }) => {
//   const opacity = useTransform(progress, range, [0, 1]);
//   return (
//     <span className="mr-[2px] relative inline-block">
//       <span className="absolute opacity-10">{children}</span>
//       <motion.span style={{ opacity: opacity }} >
//         {children}
//       </motion.span>
//     </span>
//   );
// };
