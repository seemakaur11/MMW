import React from "react";
import AboutSlider from "./AboutSlider";
import Aboutstory from "./Aboutstory";
import Aboutvideo from "./Aboutvideo";
import { aboutData } from "../helper";

function About() {
  return (
    <div>
      <div className="container-fluid py-5 pl-5" id="about-container">
        <div className="row pt-5 pl-5">
          <div className="col-md-12 pt-5">
            <h5 id="about">
              About Us <hr id="about-hr"></hr>
            </h5>
            <h1>
              A Team Of Experts United By The <br></br>Passion For
              Technology-Led Solutions
            </h1>
            <div id="about-main-elemontor">
              <div id="about-rcircle">
                <div id="about-welcome-shape-1"></div>
                <div id="about-welcome-shape-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 pl-5">
        <div className="row py-5 pl-5">
          <div className="col-md-12 py-5">
            <h1 id="aboutpara-h1">About Make My Website</h1>
            <h5 id="aboutpara-h5">
              A promising agency that redefines digitalisation and develops
              magnificent web<br></br> experiences
            </h5>
            <p id="aboutpara-p">
              Make My Website envisions empowering local businesses by creating
              meaningful experiences for them to ace in their fields of
              expertise. <br></br>We take pride in having successful
              associations across Australia whilst adopting innovative practices
              and fostering creativity to do what <br></br>it takes to deliver
              the best.
            </p>
          </div>
        </div>
      </div>
      <AboutSlider/>
      <Aboutstory />
      <Aboutvideo />
    </div>
  );
}

export default About;
