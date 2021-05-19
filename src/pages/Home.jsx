import React from "react";
// import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
import WhatDoiDo from "../components/WhatDoiDO";
import Projects from "../components/projects";

class Home extends React.Component {
  render() {
    return (
      <div className="ak-home">
        <HeroBanner />
        <WhatDoiDo />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default Home;
