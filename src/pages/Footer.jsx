import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[7vh] text-base sm:text-lg bg-white dark:bg-[#303030] dark:text-white flex items-center justify-center">
      &copy; 2024<span className="text-red-500 text-1xl font-bold pl-[4px] "> .</span>{"\u00A0"} by
      Himanshu | All Right Reserved
    </div>
  );
};

export default Footer;
