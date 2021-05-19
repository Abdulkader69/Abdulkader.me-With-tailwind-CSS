import React, { Component } from "react";

class Header extends Component {
  state = {
    sticky: "",
    // toggleActive: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let sticky = "";
      if (window.scrollY >= 55) {
        sticky = "sticky_enabled";
      }
      this.setState({ sticky });
    });
  }

  render() {
    return (
      <div className={'ak_header_wrap fixed top-0 left-0 w-full py-[15px] z-20 ' + ([this.state.sticky] || '') }>
        <div className="container">
          <div className="flex items-center">
            <div className="w-1/6">
                <div className="main_logo"><a href="/"><img className="w-[70px]" src="../images/logo.png" alt="" /></a></div>
            </div>
            <div className="w-5/6">
              <div className="main_nav_wrap">
                <ul>
                  <li><a className="contact-btn transition-all border-2 border-[#f0106e] hover:bg-[#f0106e] text-[#f0106e] hover:text-white rounded-[5px] px-[30px] py-[6px]" href="mailto:abdulkader.69k@gmail.com">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
