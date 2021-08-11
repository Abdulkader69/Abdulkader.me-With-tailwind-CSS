import React, { Component } from "react";
import Lottie from "react-lottie";
import ask from "../../public/animation/lottie-ask2.json";
import think from "../../public/animation/lottie-think.json";
import design from "../../public/animation/lottie-design.json";
import develop from "../../public/animation/lottie-develop.json";
import deploy from "../../public/animation/lottie-deploy.json";
import support from "../../public/animation/lottie-support.json";


class HowIWork extends Component {
  render() {
    const defaultOptions1 = {
      loop: true,
      autoplay: true,
      animationData: ask,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    const defaultOptions2 = {
      loop: true,
      autoplay: true,
      animationData: think,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    const defaultOptions3 = {
      loop: true,
      autoplay: true,
      animationData: design,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    const defaultOptions4 = {
      loop: true,
      autoplay: true,
      animationData: develop,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    const defaultOptions5 = {
      loop: true,
      autoplay: true,
      animationData: deploy,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    const defaultOptions6 = {
      loop: true,
      autoplay: true,
      animationData: support,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    return (
      <div className="ak_how_i_work_section md:pt-[50px] xsm:pt-[30px] md:pb-[20px] xsm:pb-[10px]">
        <div className="container">
          <div className="flex item-center w-full">
            <div className="ak-work-progress-headline ak-headline-wrap md:pb-[40px] xsm:pb-[30px] w-full">
              <h2 className="primary-headline md:text-[48px] xsm:text-[35px] md:max-w-[212px] xsm:max-w-[160px] tracking-[1.5px] text-[#fff] z-10">
                How I <span>Work</span>
              </h2>
              <div className="ak-divider-inn relative md:mt-[10px] xsm:mt-0 h-[2px]"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap items-center m-auto">
              <div className="xl:w-4/12 lg:w-4/12 md:w-3/6 relative mb-[30px]">
                <div className="ak-work-progress-inner md:text-left xsm:text-center md:px-[15px] xsm:px-[0px]">
                  <span className="work-progress-icon lottie-1 h-[120px] w-[120px] block mb-[10px] md:mx-0 m-auto">
                    <Lottie options={defaultOptions1} />
                  </span>
                  <div className="work-progress-title mb-[10px]">
                    <h3 className="md:text-[30px] xsm:text-[25px] relative">
                      <sup className="text-[#f0106e]">1</sup>
                      Ask
                    </h3>
                  </div>
                  <div className="work-progress-content">
                    <p className="md:text-[16px] xsm:text-[15px] leading-6">We start with a few simple questions. Through thoughtful consideration of your responses, we're able to craft the essential guidelines that will shape your brand's online experience.</p>
                  </div>
                </div>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-3/6 relative mb-[30px]">
                <div className="ak-work-progress-inner md:text-left xsm:text-center md:px-[15px] xsm:px-[0px]">
                  <span className="work-progress-icon h-[120px] w-[120px] block mb-[10px] md:mx-0 m-auto">
                    <Lottie options={defaultOptions2} />
                  </span>
                  <div className="work-progress-title mb-[10px]">
                    <h3 className="md:text-[30px] xsm:text-[25px] relative">
                      <sup className="text-[#f0106e]">2</sup>
                      Think
                    </h3>
                  </div>
                  <div className="work-progress-content">
                    <p className="md:text-[16px] xsm:text-[15px] leading-6">We're solution oriented people - what others call problems, we see as challenges and opportunities. We find innovative solutions through creative thinking and open feedback loops. We keep it real - we'll promise to always tell you the truth, and that your feedback will never hurt our feelings.</p>
                  </div>
                </div>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-3/6 relative mb-[30px]">
                <div className="ak-work-progress-inner md:text-left xsm:text-center md:px-[15px] xsm:px-[0px]">
                  <span className="work-progress-icon lottie-3 h-[120px] w-[120px] block mb-[10px] md:mx-0 m-auto">
                    <Lottie options={defaultOptions3} />
                  </span>
                  <div className="work-progress-title mb-[10px]">
                    <h3 className="md:text-[30px] xsm:text-[25px] relative">
                      <sup className="text-[#f0106e]">3</sup>
                      Design
                    </h3>
                  </div>
                  <div className="work-progress-content">
                    <p className="md:text-[16px] xsm:text-[15px] leading-6">We make data-driven decisions about UX while innovating every step of the way. From mobile to tablet to full wall projections, our digital creations are designed to make an impact on any sized screen.</p>
                  </div>
                </div>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-3/6 relative mb-[30px]">
                <div className="ak-work-progress-inner md:text-left xsm:text-center md:px-[15px] xsm:px-[0px]">
                  <span className="work-progress-icon lottie-4 h-[120px] w-[120px] block mb-[10px] md:mx-0 m-auto">
                    <Lottie options={defaultOptions4} />
                  </span>
                  <div className="work-progress-title mb-[10px]">
                    <h3 className="md:text-[30px] xsm:text-[25px] relative">
                      <sup className="text-[#f0106e]">4</sup>
                      Develop
                    </h3>
                  </div>
                  <div className="work-progress-content">
                    <p className="md:text-[16px] xsm:text-[15px] leading-6">Our engineers are artists - they can breathe life into designs and make websites move in ways you never thought possible. The products and platforms we develop are modular, so they can easily evolve over time, extending their life cycle in an ever-changing digital landscape.</p>
                  </div>
                </div>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-3/6 relative mb-[30px]">
                <div className="ak-work-progress-inner md:text-left xsm:text-center md:px-[15px] xsm:px-[0px]">
                  <span className="work-progress-icon h-[120px] w-[120px] block mb-[10px] md:mx-0 m-auto">
                    <Lottie options={defaultOptions5} />
                  </span>
                  <div className="work-progress-title mb-[10px]">
                    <h3 className="md:text-[30px] xsm:text-[25px] relative">
                      <sup className="text-[#f0106e]">5</sup>
                      Deploy
                    </h3>
                  </div>
                  <div className="work-progress-content">
                    <p className="md:text-[16px] xsm:text-[15px] leading-6">Our rigorous and thorough quality assurance process ensures that every product we deploy has been extensively road-tested and is ready to go. We kill more bugs than a Coney Island Superintendent. [Fact.]</p>
                  </div>
                </div>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-3/6 relative mb-[30px]">
                <div className="ak-work-progress-inner md:text-left xsm:text-center md:px-[15px] xsm:px-[0px]">
                  <span className="work-progress-icon h-[120px] w-[120px] block mb-[10px] md:mx-0 m-auto">
                    <Lottie options={defaultOptions6} />
                  </span>
                  <div className="work-progress-title mb-[10px]">
                    <h3 className="md:text-[30px] xsm:text-[25px] relative">
                      <sup className="text-[#f0106e]">6</sup>
                      Support
                    </h3>
                  </div>
                  <div className="work-progress-content">
                    <p className="md:text-[16px] xsm:text-[15px] leading-6">We're here to help you. Reach out to us anytime, for anything you need. Ongoing technical support is part of the deal, so you can focus on growing your business—worry-free.</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HowIWork;
