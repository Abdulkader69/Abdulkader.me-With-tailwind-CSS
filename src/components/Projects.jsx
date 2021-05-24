import React, { Component } from "react";

const projects = [
  {
    id: "1",
    icon: "/../images/Projects/The-High-Line-Models.jpg",
    title: "High Line Models",
    cat: "Divi",
    website: "https://thehighlinemodels.com/",
  },
  {
    id: "2",
    icon: "/../images/Projects/istheypay.png",
    title: "iSTheyPay",
    cat: "Custom Theme",
    website: "https://istheypay.com/",
  },
];

class Projects extends Component {
  componentDidMount() {
    // all images inside the image modal content class
    const lightboxImages = document.querySelectorAll(".project-item img");
    // dynamically selects all elements inside modal popup
    const modalElement = (element) =>
      document.querySelector(`.image-modal-popup ${element}`);

    const body = document.querySelector("body");

    // closes modal on clicking anywhere and adds overflow back
    document.addEventListener("click", () => {
      body.style.overflow = "auto";
      modalPopup.style.display = "none";
    });

    const modalPopup = document.querySelector(".image-modal-popup");

    // loops over each modal content img and adds click event functionality
    lightboxImages.forEach((img) => {
      const data = img.dataset;
      img.addEventListener("click", (e) => {
        body.style.overflow = "hidden";
        e.stopPropagation();
        modalPopup.style.display = "block";
        // modalElement("h1").innerHTML = data.title;
        // modalElement("p").innerHTML = data.description;
        // modalElement("a").href = data.url;
        // modalElement(".secondary-link").href = data.repo;
        modalElement("img").src = img.src;
      });
    });
  }

  render() {
    return (
      <div className="ak_projects_section lg:pb-[100px] md:pb-[70px] xsm:pb-[50px] md:pt-[50px] xsm:pt-[30px]">
        <div className="container">
          <div className="flex item-center w-full">
            <div className="ak-recent-works-headline ak-headline-wrap lg:pb-[70px] md:pb-[50px] xsm:pb-[30px] w-full">
              <h2 className="primary-headline md:text-[48px] xsm:text-[35px] md:max-w-[278px] xsm:max-w-[208px] tracking-[1.5px]">
                Recents <span>Works</span>
              </h2>
              <div className="ak-divider-inn relative md:mt-[10px] xsm:mt-0 h-[2px]"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap items-center max-w-[980px] m-auto justify-between">
            {projects.map((project) => {
              return (
                <div
                  className="sm:pb-[50%] xsm:pb-[100%] sm:mb-0 xsm:mb-[20px] overflow-hidden relative project-item"
                  key={project.id}
                >
                  <img
                    className="absolute w-full h-[auto] left-0 top-0"
                    src={project.icon}
                    alt=""
                  />
                  <h3 className="text-[25px] my-[10px] uppercase absolute z-20">
                    {project.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="image-modal-popup">
          <div className="close-btn">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 357 357"
            >
              <g>
                <g id="close">
                  <polygon
                    points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
			214.2,178.5 		"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
          <div className="wrapper">
            <img src="" alt="Image Modal" />
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
