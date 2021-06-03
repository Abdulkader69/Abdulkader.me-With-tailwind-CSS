import React, { Component } from "react";
import Draggable from "react-draggable";

class Projects extends Component {
  render() {
    return (
      <div className="ak_projects_section lg:pb-[100px] md:pb-[70px] xsm:pb-[50px] md:pt-[50px] xsm:pt-[30px] h-screen-flex">
        {/* <div className="container">
          <div className="flex item-center w-full">
            <div className="ak-recent-works-headline ak-headline-wrap lg:pb-[70px] md:pb-[50px] xsm:pb-[30px] w-full">
              <h2 className="primary-headline md:text-[48px] xsm:text-[35px] md:max-w-[278px] xsm:max-w-[208px] tracking-[1.5px]">
                About <span>Myself</span>
              </h2>
              <div className="ak-divider-inn relative md:mt-[10px] xsm:mt-0 h-[2px]"></div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="flex flex-wrap items-center max-w-[980px] m-auto justify-between">
            <Draggable
              // axis="x"
              handle=".handle"
              defaultPosition={{x: 0, y: 0}}
              // position={null}
              // grid={[25, 25]}
              // scale={1}
              // onStart={this.handleStart}
              // onDrag={this.handleDrag}
              // onStop={this.handleStop}
            >
              <div className="rounded-sm border-2 border-gray-500 border-solid p-5">
                <div className="handle">Drag from here</div>
                <div>This readme is really dragging on...</div>
              </div>
            </Draggable>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
