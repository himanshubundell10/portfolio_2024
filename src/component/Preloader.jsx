import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { opacity, slideUp } from "../animations/anim";

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const words = [
    "Hello",
    "Hallo",
    "नमस्ते",
    "Bonjour",
    "iHola",
    "Ciao",
    "Привет",
    "你好",
    "Olá",
  ];

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 120
    );
  }, [index]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="w-[100vw] h-[100vh]  z-[999] fixed overflow-hidden justify-center flex items-center flex-col bg-[#141516] text-white gap-4"
    >
      <motion.h1
        variants={opacity}
        initial="initial"
        animate="enter"
        className="md:text-3xl text-2xl font-bold w-fit text-center p-4 select-none z-[1]"
      >
        Hi, I'm Himanshu, And I'm a Full Stack Developer
      </motion.h1>
      <motion.h2
        variants={opacity}
        initial="initial"
        animate="enter"
        className="w-fit text-xl font-semibold select-none"
      >
        <span className="text-white text-4xl font-bold ">.&nbsp;</span>
        {words[index]}
      </motion.h2>
    </motion.div>
  );
};

export default Preloader;
