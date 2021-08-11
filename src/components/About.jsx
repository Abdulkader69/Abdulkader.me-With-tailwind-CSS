import React, { Component } from "react";
import Draggable from "react-draggable";

class About extends Component {
  componentDidMount() {
    let current = 0;
    let interval = 30;

    // let percentageIncreaseText = document.querySelectorAll
    window.addEventListener("load", () => {
      let progressBars = document.querySelectorAll(".progress-bar");
      let values = [
        "90%",
        "90%",
        "70%",
        "70%",
        "70%",
        "60%",
        "80%",
        "90%",
        "40%",
        "50%",
        "80%",
        "20%",
      ];
      let colors = [
        "#f674a4",
        "#f0bb4b",
        "#a1ce5b",
        "#66b3cc",
        "#f674a4",
        "#f0bb4b",
        "#a1ce5b",
        "#66b3cc",
        "#f674a4",
        "#f0bb4b",
        "#66b3cc",
      ];
      progressBars.forEach((progress, index) => {
        progress.style.width = values[index];
        progress.style.backgroundColor = `${colors[index]}`;
        setInterval(function add() {
          if (current < parseInt(values[index])) {
            current++;
            // progress.innerHTML = `<span>${current}%`;
          }
        }, interval);
      });
    });
  }
  render() {
    return (
      <div className="ak_about_section lg:pb-[100px] md:pb-[70px] xsm:pb-[50px] md:pt-[50px] xsm:pt-[30px]">
        <div className="container">
          <div className="flex item-center w-full">
            <div className="ak-about-headline ak-headline-wrap lg:pb-[70px] md:pb-[50px] xsm:pb-[30px] w-full">
              <h2 className="primary-headline md:text-[48px] xsm:text-[35px] md:max-w-[240px] xsm:max-w-[180px] tracking-[1.5px]">
                About <span>Myself</span>
              </h2>
              <div className="ak-divider-inn relative md:mt-[10px] xsm:mt-0 h-[2px]"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex mx-[-15px] md:flex-row flex-wrap-reverse">
          <div className="md:w-1/2 w-full px-[15px]">

              <div className="skill-bar">
                <p>HTML</p>
                <div className="progress">
                  <div className="progress-bar">
                    <span>90%</span>
                  </div>
                </div>

                <p>CSS</p>
                <div className="progress">
                  <div className="progress-bar">
                    <span>90%</span>
                  </div>
                </div>

                <p>JavaScript</p>
                <div className="progress">
                  <div className="progress-bar">
                    <span>70%</span>
                  </div>
                </div>
                <p>jQuery</p>
                <div className="progress">
                  <div className="progress-bar">
                    <span>70%</span>
                  </div>
                </div>

                <p>React JS</p>
                <div className="progress">
                  <div className="progress-bar">
                    <span>70%</span>
                  </div>
                </div>
                <p>Next JS</p>
                <div className="progress">
                  <div className="progress-bar">
                    <span>60%</span>
                  </div>
                </div>
                <p>Wordpress</p>
                <div className="progress">
                  <div className="progress-bar">
                    <span>80%</span>
                  </div>
                </div>
                <p>Tailwind Css</p>
                <div className="progress">
                  <div className="progress-bar">
                    <span>90%</span>
                  </div>
                </div>
                <p>MY SQL</p>
                <div className="progress">
                  <div className="progress-bar">
                    <span>40%</span>
                  </div>
                </div>
                <p>PHP</p>
                <div className="progress">
                  <div className="progress-bar">
                    <span>50%</span>
                  </div>
                </div>
                <p>Adobe Creative Apps</p>
                <div className="progress">
                  <div className="progress-bar">
                    <span>80%</span>
                  </div>
                </div>
                <p>Laravel</p>
                <div className="progress">
                  <div className="progress-bar">
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full px-[15px]">
              <div className="fact border-solid border-[1px] border-[rgba(240,16,110,0.5)] lg:mb-[50px] mb-[30px] rounded-[10px] bg-[rgba(240,16,110,0.1)] lg:mr-[100px] md:mr-[50px]">
                <div className="fact-head w-full text-center bg-[rgba(240,16,110,0.5)] py-[10px] flex justify-center">
                  <p className="text-[16px] font-semibold uppercase tracking-[1px] w-[max-content]">
                    Fact _ 1
                  </p>
                </div>
                <div className="fact-content p-[20px] pb-[30px] text-[18px] font-medium tracking-[1px] leading-[1.3em]">
                  <div className="flex items-end mb-[15px]">
                    <h2 className="text-[50px] leading-[1em] mr-[10px]">
                      100+
                    </h2>{" "}
                    <p className="uppercase mb-[8px]">Projects</p>
                  </div>
                  <p>
                    I've worked on almost 100+ projects with multiple clients.
                  </p>
                </div>
              </div>
              <div className="fact border-solid border-[1px] border-[rgba(240,16,110,0.5)] lg:mb-[50px] mb-[30px] rounded-[10px] bg-[rgba(240,16,110,0.1)] lg:ml-[50px] md:ml-[20px] lg:mr-[50px] md:mr-[20px]">
                <div className="fact-head w-full text-center bg-[rgba(240,16,110,0.5)] py-[10px] flex justify-center">
                  <p className="text-[16px] font-semibold uppercase tracking-[1px] w-[max-content]">
                    Fact _ 2
                  </p>
                </div>
                <div className="fact-content p-[20px] pb-[30px] text-[18px] font-medium tracking-[1px] leading-[1.3em]">
                  <div className="flex items-end mb-[15px]">
                    <h2 className="text-[50px] leading-[1em] mr-[10px]">3+</h2>{" "}
                    <p className="uppercase mb-[8px]">Years</p>
                  </div>
                  <p>I've been developing websites for more than 3 years.</p>
                </div>
              </div>
              <div className="fact border-solid border-[1px] border-[rgba(240,16,110,0.5)] lg:mb-[50px] mb-[30px] rounded-[10px] bg-[rgba(240,16,110,0.1)] lg:ml-[100px] md:ml-[50px]">
                <div className="fact-head w-full text-center bg-[rgba(240,16,110,0.5)] py-[10px] flex justify-center">
                  <p className="text-[16px] font-semibold uppercase tracking-[1px] w-[max-content]">
                    Fact _ 3
                  </p>
                </div>
                <div className="fact-content p-[20px] pb-[30px] text-[18px] font-medium tracking-[1px] leading-[1.3em]">
                  <p className="mb-[15px]">
                    I’m a web developer with a <span className="text-[#ffc10f]">Political Science</span> background. In
                    other words, I went to <span className="text-[#ffc10f]">Political Science</span> Collage and returned a programmer.
                  </p>
                  <p>Oops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
