import React, { useRef } from "react";
import Button from "../component/Button";

const Contact = () => {
  // animation
  const container = useRef(null);

  return (
    <section
      id="Contact"
      className="section1 flex justify-center items-center min-h-[90vh] w-[86vw] m-auto mt-10  "
    >
      <div className="flex flex-col md:flex-row h-fit relative w-full gap-4">
        {/* about me  */}
        <div className="md:w-[10%] w-full flex flex-row md:flex-col justify-start md:pt-12 items-center gap-6 md:space-y-4 px-4  ">
          <div
            // style={{ transform: "rotate(-90deg)" }}
            className=" uppercase text-[#5E5E5E] rotate-0 md:rotate-[-90deg] dark:text-[#9e9e9e] "
          >
            contact
          </div>
          <div className="line md:h-[40px] md:w-[2px] h-[2px] w-[80px] bg-[#5E5E5E]"></div>
        </div>

        {/* right side */}
        <div className="flex flex-col md:flex-row items-start md:w-[90%] w-full px-4 md:gap-8 gap-4  ">
          <div className="flex-1">
            <h2 className="font-bold text-3xl lg:text-5xl pb-2 dark:text-white">
              Contact Me
            </h2>
            <p className="text-justify dark:text-[#9e9e9e]">
              Need a website that stands out? Let's turn your vision into
              reality. Contact me today!
            </p>
          </div>

          <div className="right flex-1 flex justify-center items-center w-full">
            <div className="w-[95%] sm:w-full text-justify flex items-center justify-center ">
              <form
                action="https://getform.io/f/panvjnoa"
                method="POST"
                className="w-[90%] sm:w-full p-6 py-8 rounded-md bg-white flex flex-col gap-7 shadow-md dark:bg-[#303030]"
              >
                <div className="flex flex-col gap-1 dark:text-white">
                  <label htmlFor="name">Name</label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="bg-[#E6E6E6] p-2 rounded-md text-[14px] text-black dark:bg-black dark:text-white outline-none "
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex flex-col gap-1 dark:text-white">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="bg-[#E6E6E6] p-2 rounded-md text-[14px] text-black outline-none dark:bg-black dark:text-white "
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex flex-col gap-1 dark:text-white">
                  <label htmlFor="message">Message</label>
                  <input
                    name="message"
                    id="message"
                    type="text"
                    className="bg-[#E6E6E6] p-2 rounded-md text-[14px] text-black outline-none dark:bg-black dark:text-white "
                    placeholder="Write Message..."
                  />
                </div>
                <Button
                  style={{
                    position: "relative",
                    marginTop: "1rem",
                    padding: "0.5rem",
                    color: "white",
                    backgroundColor: "#1C1D20",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <p className="z-10">
                    Send{" "}
                    <span className="text-red-500 text-2xl font-bold transition-transform duration-500  ">
                      .
                    </span>
                  </p>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
