import React, { Component } from "react";

const services = [
  {
    id: "1",
    icon: "../images/logo.png",
    title: "WordPress Development",
    description:
      "Design a WordPress site from scratch and include functionality as you want.",
  },
  {
    id: "2",
    icon: "../images/logo.png",
    title: "Theme Customization",
    description: "Customize any theme or template to match users desire.",
  },
  {
    id: "3",
    icon: "../images/logo.png",
    title: "Theme Creation",
    description:
      "Create branding themes for companies and themes for marketplace as well.",
  },
  {
    id: "4",
    icon: "../images/logo.png",
    title: "E-Commerce Development",
    description:
      "Ecommerce website with lots of feature and bug free, secure payment method.",
  },
  {
    id: "5",
    icon: "../images/logo.png",
    title: "Speed Optimization",
    description:
      "Optimize website speed and make loading speed A+ grade like any premium websites.",
  },
  {
    id: "6",
    icon: "../images/logo.png",
    title: "Web Template Design",
    description:
      "Create Web Template mockup for your website with Adobe Creative Cloud Apps.",
  },
  {
    id: "7",
    icon: "../images/logo.png",
    title: "SEO Optimization",
    description:
      "Make your website more enrich with keyword base search, article writing and link building.",
  },
  {
    id: "8",
    icon: "../images/logo.png",
    title: "Custom Websites",
    description:
      "Create advanced website using custom php frameworks like (laravel) or basic php website.",
  },
];

class WhatDoiDo extends Component {
  render() {
    return (
      <div className="ak_what_doido_section pt-[100px] pb-[30px]">
        <div className="container">
          <div className="flex flex-wrap items-center">
              {services.map((service) => {
                  return (
                      <div className="xl:w-1/4 lg:w-2/6 md:w-3/6 text-center px-4 mb-[70px]" key={service.id}>
                          <img className="w-[70px] m-auto" src={service.icon} alt="" />
                          <h3 className="text-[25px] my-[10px] uppercase">{service.title}</h3>
                          <p className="text-[18px] leading-normal">{service.description}</p>
                      </div>
                  )
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default WhatDoiDo;
