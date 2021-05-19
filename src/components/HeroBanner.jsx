import React, { Component } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../public/animation/27432-developer.json";

class HeroBanner extends Component {

  componentDidMount() {
    window.requestAnimFrame = (function() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback);
        }
      );
    });
    
    function init(elemid) {
      let canvas = document.getElementById(elemid),
        c = canvas.getContext("2d"),
        w = (canvas.width = window.innerWidth),
        h = (canvas.height = window.innerHeight);
      c.fillStyle = "rgba(30,30,30,1)";
      c.fillRect(0, 0, w, h);
      return {c:c,canvas:canvas};
    }

    window.onload = function () {
      //functions definition
    
      //class definition
      class segm {
        constructor(x, y, l) {
          this.b = Math.random()*1.9+0.1;
          this.x0 = x;
          this.y0 = y;
          this.a = Math.random() * 2 * Math.PI;
          this.x1 = this.x0 + l * Math.cos(this.a);
          this.y1 = this.y0 + l * Math.sin(this.a);
          this.l = l;
        }
        update(x, y) {
          this.x0 = x;
          this.y0 = y;
          this.a = Math.atan2(this.y1 - this.y0, this.x1 - this.x0);
          this.x1 = this.x0 + this.l * Math.cos(this.a);
          this.y1 = this.y0 + this.l * Math.sin(this.a);
        }
      }
      class rope {
        constructor(tx, ty, l, b, slq, typ) {
          if(typ == "l"){
            this.res = l / 2;
          }else{
            this.res = l / slq;
          }
          this.type = typ;
          this.l = l;
          this.segm = [];
          this.segm.push(new segm(tx, ty, this.l / this.res));
          for (let i = 1; i < this.res; i++) {
            this.segm.push(
              new segm(this.segm[i - 1].x1, this.segm[i - 1].y1, this.l / this.res)
            );
          }
          this.b = b;
        }
        update(t) {
          this.segm[0].update(t.x, t.y);
          for (let i = 1; i < this.res; i++) {
            this.segm[i].update(this.segm[i - 1].x1, this.segm[i - 1].y1);
          }
        }
        show() {
          if(this.type == "l"){
          c.beginPath();
          for (let i = 0; i < this.segm.length; i++) {
            c.lineTo(this.segm[i].x0, this.segm[i].y0);
          }
          c.lineTo(
            this.segm[this.segm.length - 1].x1,
            this.segm[this.segm.length - 1].y1
          );
          c.strokeStyle = "#f0106e";
          c.lineWidth = this.b;
          c.stroke();
    
          c.beginPath();
          c.arc(this.segm[0].x0, this.segm[0].y0, 1, 0, 2 * Math.PI);
          c.fillStyle = "rgba(255, 193, 15)";
          c.fill();
    
          c.beginPath();
          c.arc(
            this.segm[this.segm.length - 1].x1,
            this.segm[this.segm.length - 1].y1,
            2,
            0,
            2 * Math.PI
          );
          c.fillStyle = "rgba(255, 193, 15)";
          c.fill();
          }else{
          for (let i = 0; i < this.segm.length; i++) {
            c.beginPath();
            c.arc(this.segm[i].x0, this.segm[i].y0, this.segm[i].b, 0, 2*Math.PI);
            c.fillStyle = "rgba(255, 193, 15)";
          c.fill();
          }
            c.beginPath();
          c.arc(
            this.segm[this.segm.length - 1].x1,
            this.segm[this.segm.length - 1].y1,
            2, 0, 2*Math.PI
          );
          c.fillStyle = "rgba(255, 193, 15)";
          c.fill();
          }
        }
      }
    
      //setting up canvas
      let c = init("canvas").c,
        canvas = init("canvas").canvas,
        w = (canvas.width = window.innerWidth),
        h = (canvas.height = window.innerHeight),
        ropes = [];
    
      //variables definition
      let nameOfVariable = "value",
        mouse = {},
        last_mouse = {},
        rl = 50,
        randl = [],
        target = { x: w/2, y: h/2 },
        last_target = {},
        t = 0,
        q = 10,
        da = [],
        type = "l";
    
      for (let i = 0; i < 100; i++) {
        if(Math.random() > 0.25){
            type = "l";
          }else{
            type = "o";
          }
        ropes.push(
          new rope(
            w / 2,
            h / 2,
            (Math.random() * 1 + 0.5) * 500,
            Math.random() * 0.4 + 0.1,
            Math.random()*15+5,
            type
          )
        );
        randl.push(Math.random() * 2 - 1);
        da.push(0);
      }
    
      //place for objects in animation
      function draw() {
        
        if (mouse.x) {
          target.errx = mouse.x - target.x;
          target.erry = mouse.y - target.y;
        } else {
          target.errx =
            w / 2 +
            (h / 2 - q) *
              Math.sqrt(2) *
              Math.cos(t) /
              (Math.pow(Math.sin(t), 2) + 1) -
            target.x;
          target.erry =
            h / 2 +
            (h / 2 - q) *
              Math.sqrt(2) *
              Math.cos(t) *
              Math.sin(t) /
              (Math.pow(Math.sin(t), 2) + 1) -
            target.y;
        }
    
        target.x += target.errx / 10;
        target.y += target.erry / 10;
    
        t += 0.01;
        
        for (let i = 0; i < ropes.length; i++) {
          if (randl[i] > 0) {
            da[i] += (1 - randl[i]) / 10;
          } else {
            da[i] += (-1 - randl[i]) / 10;
          }
          ropes[i].update({
            x:
              target.x +
              randl[i] * rl * Math.cos((i * 2 * Math.PI) / ropes.length + da[i]),
            y:
              target.y +
              randl[i] * rl * Math.sin((i * 2 * Math.PI) / ropes.length + da[i])
          });
          ropes[i].show();
        }
        last_target.x = target.x;
        last_target.y = target.y;
      }
    
      //mouse position
      canvas.addEventListener(
        "mousemove",
        function (e) {
          last_mouse.x = mouse.x;
          last_mouse.y = mouse.y;
    
          mouse.x = e.pageX - this.offsetLeft;
          mouse.y = e.pageY - this.offsetTop;
        },
        false
      );
      
      canvas.addEventListener("mouseleave", function(e) {
        mouse.x = false;
        mouse.y = false;
      });
    
      //animation frame
      function loop() {
        window.requestAnimFrame(loop);
        c.clearRect(0, 0, w, h);
        draw();
      }
    
      //window resize
      window.addEventListener("resize", function () {
        (w = canvas.width = window.innerWidth),
          (h = canvas.height = window.innerHeight);
        loop();
      });
    
      //animation runner
      loop();
      setInterval(loop, 1000 / 60);
    };
  }


  render() {
    return (
      <div className="ak_hero_banner_wrap h-screen-flex">
        <canvas id="canvas"></canvas>
        <svg id="triangle1" width="25px" height="25px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.675"
            height="22.236"
            viewBox="0 0 25.675 22.236"
          >
            <path
              fill="none"
              stroke="#CF4981"
              strokeWidth="3"
              strokeMiterlimit="10"
              d="M12.837 3l5.12 8.868 5.12 8.868H2.597l5.12-8.868z"
            ></path>
          </svg>
        </svg>
        <svg id="semiCircle1" width="25px" height="25px">
          <path
            fill="none"
            stroke="#CF4981"
            strokeWidth="3"
            strokeMiterlimit="10"
            d="M1.5 14.546C1.5 7.34 7.34 1.5 14.547 1.5c7.205 0 13.046 5.84 13.046 13.046"
          ></path>
        </svg>
        <svg id="triangle2" width="25px" height="25px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.675"
            height="22.236"
            viewBox="0 0 25.675 22.236"
          >
            <path
              fill="none"
              stroke="#CF4981"
              strokeWidth="3"
              strokeMiterlimit="10"
              d="M12.837 3l5.12 8.868 5.12 8.868H2.597l5.12-8.868z"
            ></path>
          </svg>
        </svg>
        <svg id="triangle3" width="25px" height="25px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.675"
            height="22.236"
            viewBox="0 0 25.675 22.236"
          >
            <path
              fill="none"
              stroke="#CF4981"
              strokeWidth="3"
              strokeMiterlimit="10"
              d="M12.837 3l5.12 8.868 5.12 8.868H2.597l5.12-8.868z"
            ></path>
          </svg>
        </svg>
        <svg id="semiCircle2" width="25px" height="25px">
          <path
            fill="none"
            stroke="#CF4981"
            strokeWidth="3"
            strokeMiterlimit="10"
            d="M1.5 14.546C1.5 7.34 7.34 1.5 14.547 1.5c7.205 0 13.046 5.84 13.046 13.046"
          ></path>
        </svg>
        <div className="section-1 pt-5 sm:pt-12 lg:pt-0 w-full pointer-events-none">
          <div className="container">
            <div className="flex flex-wrap items-center">
              <div className="w-full">
                <h3 className="xl:text-[30px] lg:text-[25px] text-[20px] z-10 relative">
                  Welcome To My Universe
                </h3>
                <h1 className="xl:text-[90px] lg:text-[90px] md:text-[80px] text-[52px] flex z-10 relative">
                  I'm{" "}
                  <p className="text-effect">
                    <span>A</span>
                    <span>A</span>
                  </p>
                  bdul{" "}
                  <p className="text-effect">
                    <span>K</span>
                    <span>K</span>
                  </p>
                  ader
                </h1>
                <p className="z-10 relative">WEB DEVELOPER.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HeroBanner;
