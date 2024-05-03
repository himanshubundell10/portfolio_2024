import React from "react";

const Project = ({ title, index, setModal }) => {
  return (
    <>
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        style={{ padding: "50px 10px 50px 10px" }}
        className="project flex w-full justify-between items-center border-t border-gray-500 dark:border-white  cursor-pointer duration-[0.2s] transition-all hover:opacity-5 dark:hover:opacity-[0.1]  gap-10"
      >
        <h2 className="m-0 font-normal transition-all duration-[0.4s]  text-4xl sm:text-6xl dark:text-[#9e9e9e]">
          {title}
        </h2>
        <p className="duration-[0.4s] font-normal text-end dark:text-[#9e9e9e]">
          Design & Development
        </p>
      </div>
    </>
  );
};

export default Project;
