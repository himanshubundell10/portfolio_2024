import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpg";
import { GithubIcon, InstagramIcon, Linkedin02Icon } from "../assets/svg/Svg";
import { setIsHover } from "../redux/reducer/circle";

const Home = () => {
  const [text] = useTypewriter({
    words: [`Full Stack Dev`, `Artist`, `Desginer`],
    loop: {},
  });

  const dispatch = useDispatch();

  const animation = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 2.6, staggerChildren: 0.1 },
    },
  };

  return (
    <header
      id="Home"
      style={{ height: "calc(100vh - 5rem)" }}
      className="flex-col sm:flex-row gap-3 sm:gap-20 flex items-center justify-center w-full sm:w-[84vw] m-auto relative  "
    >
      {/* home container */}
      <div className="sm:w-1/2 w-[80%] h-fit">
        <motion.div
          variants={animation}
          initial="hidden"
          animate="visible"
          className="homecontent flex flex-col items-center sm:items-start gap-0 w-fit "
        >
          <motion.h2
            variants={animation}
            className="font-bold text-[25px] sm:text-2xl lg:text-3xl  dark:text-white"
          >
            Hello, it's me
          </motion.h2>
          <motion.h1
            variants={animation}
            className="lg:text-7xl sm:text-6xl  text-[44px] font-bold dark:text-white"
          >
            Himanshu
          </motion.h1>
          <motion.h3
            variants={animation}
            className="lg:text-3xl text-2xl font-bold text-nowrap dark:text-white"
          >
            And i'm a {""}
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #30cfd0, #8145ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {text}
            </span>
            <span className="text-blue-800">
              <Cursor />
            </span>
          </motion.h3>
          <motion.p
            variants={animation}
            className="text-[#70757d] dark:text-[#9e9e9e] text-justify"
          >
            Welcome to my portfolio! I'm a full stack web developer and artist
            passionate about crafting beautiful, functional websites. With a
            blend of technical expertise and creative vision, I bring a fresh
            perspective to every project.
          </motion.p>
        </motion.div>
      </div>

      {/* profile container */}
      <div className="sm:w-1/2 w-full  h-fit flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          className="object-cover overflow-hidden rounded-full w-[250px] h-[250px] sm:w-[40vw] sm:h-[40vw]  lg:w-[34vw] lg:h-[34vw] xl:w-[500px] xl:h-[500px] "
        >
          <img
            className="object-cover rounded-full w-full h-full"
            src={profile}
            alt="profile"
          />
        </motion.div>
      </div>
      {/* third div */}
      <div className="absolute w-[90%] sm:w-[100%] sm:bottom-1 bottom-9 flex items-center justify-between ">
        {/* left */}
        <div className="flex flex-col w-fit gap-2 items-center">
          <a
            onMouseEnter={() => dispatch(setIsHover(true))}
            onMouseLeave={() => dispatch(setIsHover(false))}
            className="text-inherit"
            href="https://github.com/himanshubundell10"
          >
            <GithubIcon />
          </a>
          <a
            onMouseEnter={() => dispatch(setIsHover(true))}
            onMouseLeave={() => dispatch(setIsHover(false))}
            className="text-inherit"
            href="https://www.linkedin.com/in/himanshubundel10/"
          >
            <Linkedin02Icon />
          </a>
          <a
            onMouseEnter={() => dispatch(setIsHover(true))}
            onMouseLeave={() => dispatch(setIsHover(false))}
            className="text-inherit"
            href="https://www.instagram.com/himanshubundell/"
          >
            <InstagramIcon />
          </a>
          <div className="line h-[30px] w-[2px] bg-[#5E5E5E] dark:bg-[#9e9e9e]"></div>
        </div>

        {/* right */}
        <div className="flex flex-col items-center gap-4 space-y-4">
          <Link
            onMouseEnter={() => dispatch(setIsHover(true))}
            onMouseLeave={() => dispatch(setIsHover(false))}
            className="rotate-90 cursor-pointer text-[#5E5E5E] dark:text-[#9e9e9e] tracking-widest"
            to="About"
            smooth
            duration={600}
          >
            SCROLL
          </Link>
          <div className="line h-[30px] w-[2px] bg-[#5E5E5E]"></div>
        </div>
      </div>
    </header>
  );
};

export default Home;
