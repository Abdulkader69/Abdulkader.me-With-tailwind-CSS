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
  render() {
    return (
      <div className="ak_projects_section">
        <div className="container">
          <div className="flex flex-wrap items-center max-w-[980px] m-auto">
            {projects.map((project) => {
              return (
                <div
                  className="xl:w-3/6 pb-[50%] overflow-hidden relative px-8"
                  key={project.id}
                >
                  <img className="absolute w-full h-[auto]" src={project.icon} alt="" />
                  <h3 className="text-[25px] my-[10px] uppercase absolute z-20">
                    {project.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
