import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Circle from "./component/Circle";
import Navbar from "./component/Navbar";
import Preloader from "./component/Preloader";
import Progressbar from "./component/Progressbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Works from "./pages/Works";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    // Retrieve theme from local storage
    const localTheme = localStorage.getItem("theme");
    if (localTheme && localTheme !== "") {
      setTheme(localTheme);
    }
    document.documentElement.classList.toggle("dark", localTheme === "dark");
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Update localStorage
      return newTheme;
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <>
      <div
        className={`w-full min-h-screen bg-[#E6E6E6] ${
          theme === "dark" ? "dark" : ""
        }`}
      >
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Progressbar />
        <Circle />
        <Navbar theme={theme} toggleDarkMode={toggleDarkMode} />
        <main className="dark:bg-[#1F1F1F]">
          <Home />
          <About />
          <Skills theme={theme} />
          <Works />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
