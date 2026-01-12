import React from 'react';
import './Vinit.css';
import preview from "../assets/shopsense.png";
import preview1 from "../assets/To-Do list updater.png";

const Vinit = () => {
  return (
    <div className="vinit-body">
      <div className="grid-overlay"></div>
      
      <div className="vinit-container">
        <header className="vinit-header">
          <h1 className="glitch-text typewriter">VINIT TIWARI</h1>
          <div className="turmeric-divider"></div>
          <p className="subtitle">Front End Developer || DSA Enthusiast</p>
        </header>

        <section className="vinit-card glow-card">
          <div className="card-corner"></div>
          <h2>ABOUT</h2>
          <p>
            I am a First year B.tech CSE student with expertise in frontend interfaces, 
            backend APIs, and database-driven systems. Apart from this, I enjoy solving DSA problems.
          </p>
        </section>

        <section className="mini-card glow-card">
          <div className="card-corner"></div>
          <h3>CORE SKILLS</h3>
          <div className="skill-pills">
            <span>REACT.JS</span>
            <span>EXPRESS.JS</span>
            <span>NODE.JS</span>
            <span>MONGODB</span>
            <span>JAVASCRIPT</span>
            <span>C++</span>
          </div>
        </section>

        <section className="vinit-card glow-card">
          <div className="card-corner"></div>
          <h2>MY PROJECTS</h2>
          
          <div className="project-block">
            <h5>Project - 1: ShopSense</h5>
            <p>Made E-Com web named shopsense</p>
            <img src={preview} alt="ShopSense" className="project-image" />
          </div>

          <div className="project-block">
            <h5>Project - 2: To-Do List</h5>
            <p>Made To-Do List app with React</p>
            <img src={preview1} alt="To-Do List" className="project-image" />
          </div>
        </section>

        <section className="mini-card glow-card">
          <div className="card-corner"></div>
          <h3>CONTACT ME</h3>
          <div className="link-container">
            <a href="https://www.linkedin.com/in/vinittiwari01" target="_blank" rel="noopener noreferrer" className="contact-yellow">LINKEDIN</a>
            <a href="mailto:https://mail.google.com/mail/?view=cm&fs=1&to=tvinit152@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-yellow">GMAIL</a>
          </div>
        </section>

        <footer className="thanks-footer glow-card">
          <div className="card-corner"></div>
          <h2 className="glitch-text">THANKS FOR VISITING</h2>
          <p className="copyright-text">
            © {new Date().getFullYear()}  DESIGNED BY VINIT TIWARI
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Vinit;