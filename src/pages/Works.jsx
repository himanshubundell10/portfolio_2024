import React, { useState } from "react";
import admindashboard from "../assets/projectimages/admindashboard.png";
import chatapp from "../assets/projectimages/chatapp.png";
import ecommerce from "../assets/projectimages/ecommerce.png";
import passmanager from "../assets/projectimages/passmanager.png";
import spotifyclone from "../assets/projectimages/spotifyclone.png";
import todo from "../assets/projectimages/todo.png";
import Modal from "../component/Modal";
import Project from "../component/Project";

const Works = () => {
  const projects = [
    { title: "Chatease", color: "#B4B4B8  ", src: chatapp ,a:"https://chatapp-frontend-three-iota.vercel.app/login"},
    { title: "Spotify Clone", color: "#000000", src: spotifyclone ,a:"https://spoyify-clone.vercel.app/"},
    { title: "Admin Dashboard", color: "#EADBC8", src: admindashboard ,a:"https://react-admin-dashboard-ts-ecru.vercel.app/"},
    { title: "Ecommerce Store", color: "#706D63", src: ecommerce ,a:"https://mern-ecommerce-frontend-2024-rho.vercel.app/"},
    { title: "PassManger", color: "#eeeeee", src: passmanager ,a:"https://pass-manager-vert.vercel.app/"},
    { title: "Todo", color: "#606470", src: todo ,a:"https://react-todo-app-kappa-ivory.vercel.app/login"},
  ];
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section
      id="Work"
      className="min-h-[100vh] md:w-[86vw] w-full m-auto flex justify-center items-start gap-5 flex-col md:flex-row mt-10"
    >
      <div className="projects w-full flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-3xl md:text-5xl dark:text-white">See My Works</h1>
          <p className="text-[#70757d] text-center dark:text-[#9e9e9e]">
            A look at some of the amazing webs & apps that i‘ve built recently.
          </p>
        </div>
        {/*project gallery  */}
        <div className="relative w-full">
          <div className="w-full flex flex-col justify-center items-center ">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  index={index}
                  title={project.title}
                  a={project.a}
                  setModal={setModal}
                />
              );
            })}
          </div>
          <Modal modal={modal} projects={projects}/>
        </div>
      </div>
    </section>
  );
};

export default Works;
