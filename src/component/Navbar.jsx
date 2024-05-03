import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsHover } from "../redux/reducer/circle";
import { motion } from "framer-motion";
import { Close, Menu } from "../assets/svg/Svg";
import { Link } from "react-scroll";
import Magnetic from "./Magnetic";
import Button from "./Button";

const Navbar = ({theme,toggleDarkMode}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleMouseEnter = () => dispatch(setIsHover(true));
  const handleMouseLeave = () => dispatch(setIsHover(false));

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    // Add event listener to handle scrolling when navbar is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to remove event listener
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Skills" },
    { id: 4, link: "Work" },
    { id: 5, link: "Contact" },
  ];
  

  
  return (
    <>
      <motion.nav
        // initial={false}
        // animate={isOpen ? open : closed}
        // variants={variants}
        className="navbar h-20 flex items-center justify-between z-10 px-2 md:px-10 bg-transparent sticky top-0 left-0 bg-white  dark:bg-[#303030] dark:text-white sm:opacity-[0.95]"
      >
        {/* logo side */}
        <div
          className="flex justify-between items-center w-full px-3 md:px-5 "
          style={{ overflowY: "visible" }}
        >
          <Magnetic>
            <div
              className="left-sid text-3xl font-semibold z-[9999] "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Portfolio
              <span className="text-red-500 text-4xl font-bold ">.</span>
            </div>
          </Magnetic>

          {/* middle */}
          <div
            className={`middle ${
              isOpen ? `translate-x-[0%]` : `translate-x-[-200%]`
            }  translate-x-[-200%] sm:translate-x-[0%] dark:bg-[#303030] transition-transform duration-500 ease-in-out gap-6 sm:gap-4 md:gap-7 font-medium flex flex-col sm:flex-row justify-center items-center fixed top-0 sm:top-[3.5%] left-0 sm:left-[30%] md:left-[32%] lg:left-[35%] w-[100vw] h-[100vh] sm:h-fit sm:w-fit bg-white sm:bg-transparent z-50`}
          >
            {links.map(({ id, link }) => (
              <Magnetic key={id}>
                <motion.li
                  initial={{ opacity: 0, y: -30 }}
                  animate={
                    isOpen ? { opacity: 1, y: 20 } : { opacity: 1, y: 0 }
                  }
                  transition={{ delay: isOpen ? id * 0.1 : 0.3 }}
                  whileInView={{}}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className=" list-none text-[16px] font-semibold cursor-pointer"
                >
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={link}
                    smooth
                    duration={600}
                  >
                    {link}
                  </Link>
                  <span className="text-red-500 text-2xl font-bold transition-transform duration-500  ">
                    .
                  </span>
                </motion.li>
              </Magnetic>
            ))}
          </div>
          <div className="right-side flex items-center justify-center gap-4">
            <Magnetic>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={()=>toggleDarkMode()}
                className="w-fit cursor-pointer p-2 md:p-3 rounded-md bg-[#E6E6E6] dark:bg-black"
              >
                {theme==="dark" ? (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="cursor-pointer text-black dark:text-white "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495 1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96 1.41 1.41 1.79-1.8-1.41-1.41z"></path>
                  </svg>
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="visible cursor-pointer text-black dark:text-white "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M14 2c1.82 0 3.53.5 5 1.35-2.99 1.73-5 4.95-5 8.65s2.01 6.92 5 8.65A9.973 9.973 0 0 1 14 22C8.48 22 4 17.52 4 12S8.48 2 14 2z"></path>
                  </svg>
                )}
              </div>
            </Magnetic>
            {/* menu toggle */}
            <Magnetic>
              <div onClick={handleToggle} className="block sm:hidden z-50">
                {isOpen ? <Close /> : <Menu />}
              </div>
            </Magnetic>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
