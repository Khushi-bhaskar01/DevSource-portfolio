import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code,
  Layout,
  Terminal,
  ExternalLink
} from "lucide-react";
import "./Akash.css";

const Akash = () => {
  return (
    <div className="akash-page">
      {/* Starry Background */}
      <div className="akash-stars"></div>

      <div className="akash-container">

        {/* --- HERO SECTION --- */}
        <section className="akash-hero">
          <div className="akash-hero-content">
            <motion.p
              className="akash-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              className="akash-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Akash <span>Das</span>
            </motion.h1>
            <motion.p
              className="akash-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I'm exploring web development by learning modern tools and technologies.
              I focus on building responsive, usable, and well-structured web experiences.
            </motion.p>

            <motion.button
              className="akash-btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
          </div>

          <div className="akash-hero-image-wrapper">
            <div className="akash-hero-blob"></div>
            <motion.img
              src="/akash.jpg"
              alt="Akash Das"
              className="akash-profile-img"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section className="akash-section">
          <div className="akash-section-header">
            <h2 className="akash-section-title">About <span>Me</span></h2>
          </div>

          <div className="akash-about-grid">
            <div className="akash-about-text">
              <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>Passionate Web Developer & Tech Enthusiast</h3>
              <p>
                I'm learning web development by building proof-of-concepts and small apps.
                I focus on clean architecture, scalable code, and learning principles that work across
                stacks and frameworks.
              </p>
              <p>
                I'm open to discussing new opportunities and collaborating on projects.
              </p>

              <button className="akash-btn-primary" style={{ marginTop: '20px' }}>
                Get In Touch
              </button>
            </div>

            <div className="akash-service-cards">
              <div className="akash-service-card">
                <div className="akash-service-icon"><Code size={24} /></div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '4px' }}>Web Development</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Creating responsive and nice web applications.</p>
                </div>
              </div>
              <div className="akash-service-card">
                <div className="akash-service-icon"><Layout size={24} /></div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '4px' }}>UI/UX Design</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Designing intuitive user interfaces.</p>
                </div>
              </div>
              <div className="akash-service-card">
                <div className="akash-service-icon"><Terminal size={24} /></div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '4px' }}>Full Stack</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Building full stack applications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section className="akash-section">
          <div className="akash-section-header">
            <h2 className="akash-section-title">My <span>Skills</span></h2>
          </div>

          <div className="akash-skills-grid">
            {[
              { name: "HTML/CSS", percent: "90%" },
              { name: "JavaScript", percent: "80%" },
              { name: "React", percent: "75%" },
              { name: "Tailwind CSS", percent: "85%" },
              { name: "Node.js", percent: "60%" },
              { name: "Git/GitHub", percent: "70%" }
            ].map((skill) => (
              <div className="akash-skill-card" key={skill.name}>
                <div className="akash-skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.percent}</span>
                </div>
                <div className="akash-progress-bg">
                  <motion.div
                    className="akash-progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.percent }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section className="akash-section" id="projects">
          <div className="akash-section-header">
            <h2 className="akash-section-title">Featured <span>Projects</span></h2>
            <p style={{ color: '#94a3b8' }}>Here are some of my recent projects showcase.</p>
          </div>

          <div className="akash-projects-grid">
            {[
              {
                title: "Weather App",
                desc: "A real-time weather application that fetches data based on user location.",
                Githublink: "https://github.com/I-akashdas/Weather-App",
                tags: ["React", "API", "CSS"],
                color: "#3b82f6"
              },
              {
                title: "To-Do List",
                desc: "A task management app to organize daily activities with local storage.",
                Githublink: "https://github.com/I-akashdas/To-Do-List",
                tags: ["HTML", "JS", "CSS"],
                color: "#a855f7"
              },
              {
                title: "Portfolio Website",
                desc: "A personal portfolio website showcasing skills and projects.",
                Githublink: "https://github.com/I-akashdas/Weather-App",
                tags: ["React", "Framer", "UI/UX"],
                color: "#f97316"
              }
            ].map((project, i) => (
              <motion.div
                className="akash-project-card"
                key={i}
                whileHover={{ y: -8 }}
              >
                <div className="akash-project-image" style={{ background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}11 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Placeholder for project image */}
                  <Code size={48} color={project.color} opacity={0.5} />
                </div>
                <div className="akash-project-content">
                  <h3 className="akash-project-title">{project.title}</h3>
                  <p className="akash-project-desc">{project.desc}</p>
                  <div className="akash-project-tags">
                    {project.tags.map(tag => (
                      <span className="akash-project-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                    <a href="#" style={{ color: '#cbd5e1' }}><Github size={20} /></a>
                    <a href="#" style={{ color: '#cbd5e1' }}><ExternalLink size={20} /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button className="akash-btn-primary">Check My Github</button>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section className="akash-section akash-contact-section">
          <h2 className="akash-section-title">Get In <span>Touch</span></h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>

          <div className="akash-social-links">
            <a href="https://github.com/I-akashdas" target="_blank" rel="noreferrer" className="akash-social-btn">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/akashdas2004" target="_blank" rel="noreferrer" className="akash-social-btn">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/_iakashdas" target="_blank" rel="noreferrer" className="akash-social-btn">
              <Twitter size={20} />
            </a>
            <a href="mailto:akashdas.edu@gmail.com" className="akash-social-btn">
              <Mail size={20} />
            </a>
          </div>

          <p style={{ marginTop: '60px', color: '#475569', fontSize: '0.9rem' }}>
            © 2026 Akash Das. All Rights Reserved.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Akash;
