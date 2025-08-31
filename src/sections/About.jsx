import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="About BrainBoss Automobile" 
          />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At <span>BrainBoss Automobile</span>, we specialize in delivering 
            top-notch automobile services that guarantee safety, durability, and 
            customer satisfaction. With a team of skilled experts, we provide 
            quality car repairs, maintenance, and professional consulting to 
            keep your vehicles running smoothly.
          </p>
          <p>
            Our mission is to redefine the automobile experience in Nigeria by 
            offering trusted services and building long-term relationships with 
            our clients.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
