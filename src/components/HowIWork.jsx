import React, { Component } from "react";

const howworks = [
  {
    id: "1",
    png: "/../images/howwork/icon-talk.png",
    gif: "/../images/howwork/icon-talk.gif",
    title: "Ask",
    description:
      "We start with a few simple questions. Through thoughtful consideration of your responses, we're able to craft the essential guidelines that will shape your brand's online experience.",
  },
  {
    id: "2",
    png: "/../images/howwork/icon-think.png",
    gif: "/../images/howwork/icon-think.gif",
    title: "Think",
    description:
      "We're solution oriented people - what others call problems, we see as challenges and opportunities. We find innovative solutions through creative thinking and open feedback loops. We keep it real - we'll promise to always tell you the truth, and that your feedback will never hurt our feelings.",
  },
  {
    id: "3",
    png: "/../images/howwork/icon-design.png",
    gif: "/../images/howwork/icon-design.gif",
    title: "Design",
    description:
      "We make data-driven decisions about UX while innovating every step of the way. From mobile to tablet to full wall projections, our digital creations are designed to make an impact on any sized screen.",
  },
  {
    id: "4",
    png: "/../images/howwork/icon-develop.png",
    gif: "/../images/howwork/icon-develop.gif",
    title: "Develop",
    description:
      "Our engineers are artists - they can breathe life into designs and make websites move in ways you never thought possible. The products and platforms we develop are modular, so they can easily evolve over time, extending their life cycle in an ever-changing digital landscape.",
  },
  {
    id: "5",
    png: "/../images/howwork/icon-deploy.png",
    gif: "/../images/howwork/icon-deploy.gif",
    title: "Deploy",
    description:
      "Our rigorous and thorough quality assurance process ensures that every product we deploy has been extensively road-tested and is ready to go. We kill more bugs than a Coney Island Superintendent. [Fact.]",
  },
  {
    id: "6",
    png: "/../images/howwork/icon-support.png",
    gif: "/../images/howwork/icon-support.gif",
    title: "Support",
    description:
      "We're here to help you. Reach out to us anytime, for anything you need. Ongoing technical support is part of the deal, so you can focus on growing your business—worry-free.",
  },
];

class HowIWork extends Component {
  componentDidMount() {
    const items = document.querySelectorAll(".ak-work-progress-inner");
    items.forEach(function(item) {
      item.addEventListener(
        "mouseenter",
        function () {
          var imgEle = item.querySelector('.work-progress-icon img');
          var altSrc = imgEle.alt;
          imgEle.src = altSrc;
        },
        false
      );
    });
  }

  render() {
    return (
      <div className="ak_how_i_work_section md:pt-[50px] xsm:pt-[30px] md:pb-[20px] xsm:pb-[10px] bg-[#fff]">
        <div className="container">
          <div className="flex item-center w-full">
            <div className="ak-work-progress-headline ak-headline-wrap md:pb-[40px] xsm:pb-[30px] w-full">
              <h2 className="primary-headline md:text-[48px] xsm:text-[35px] md:max-w-[212px] xsm:max-w-[160px] tracking-[1.5px] text-[#253069] z-10">
                How I <span>Work</span>
              </h2>
              <div className="ak-divider-inn relative md:mt-[10px] xsm:mt-0 h-[2px]"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap items-center m-auto">
            {howworks.map((howwork) => {
              return (
                <div className="xl:w-4/12 lg:w-4/12 md:w-3/6 relative mb-[30px]" key={howwork.id}>
                  <div className="ak-work-progress-inner md:text-left xsm:text-center md:px-[15px] xsm:px-[0px]">
                    <span className="work-progress-icon h-[90px] w-[90px] block mb-[10px] md:mx-0 m-auto">
                      <img className="w-full"
                        // data-src={howwork.gif}
                        src={howwork.png}
                        alt={howwork.gif}
                      />
                    </span>
                    <div className="work-progress-title mb-[10px]">
                      <h3 className="text-[#253069] md:text-[30px] xsm:text-[25px] relative">
                        <sup>{howwork.id}</sup>
                        {howwork.title}
                      </h3>
                    </div>
                    <div className="work-progress-content">
                      <p className="text-[#191919] md:text-[16px] xsm:text-[15px] leading-6">{howwork.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default HowIWork;
