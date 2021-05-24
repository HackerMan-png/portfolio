import React from "react";
import backgroundImage from "../Media/pexels-messala-ciulla-1162643.jpg";

const Main = () => {
  return (
    <div className="mainWrapper">
      <div className="imageBackground" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="blur">
          <h1>Jaxson</h1>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>

        <div className="skill">
          <p>JS - 90%</p>
          <div className="backgroundBar">
            <div className="jsSkill"></div>
          </div>
        </div>
        <div className="skill">
          <p>JQuery - 70%</p>
					<div className="backgroundBar">
            <div className="jqSkill"></div>
          </div>
        </div>
        <div className="skill">
          <p>CSS - 80%</p>
					<div className="backgroundBar">
            <div className="cssSkill"></div>
          </div>
        </div>
        <div className="skill">
          <p>Bootstrap - 60%</p>
					<div className="backgroundBar">
            <div className="bootSkill"></div>
          </div>
        </div>
        <div className="skill">
          <p>React - 70%</p>
					<div className="backgroundBar">
            <div className="reactSkill"></div>
          </div>
        </div>
        <div className="skill">
          <p>Python - 70%</p>
					<div className="backgroundBar">
            <div className="pythonSkill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
