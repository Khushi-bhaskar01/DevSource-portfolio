import profileImg from "../assets/profile.png";
import galaxyImg from "../assets/galaxy.jpg";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";
import "./Suraj.css";

const roles = [
  "Web Developer",
  "Software Engineer",
  "Graphic Designer",
  "Video Editor",
];

const typingSpeed = 80;
const deletingSpeed = 40;
const pauseTime = 900;

export default function Suraj() {
  
  const { scrollYProgress } = useScroll();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const galaxyScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const farX = useTransform(mouseX, [-1, 1], ["-10px", "10px"]);
  const midX = useTransform(mouseX, [-1, 1], ["-25px", "25px"]);
  const midY = useTransform(mouseY, [-1, 1], ["-15px", "15px"]);
  const nearX = useTransform(mouseX, [-1, 1], ["-40px", "40px"]);
  const nearY = useTransform(mouseY, [-1, 1], ["-30px", "30px"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(
        () => setText(currentRole.slice(0, text.length + 1)),
        typingSpeed
      );
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(currentRole.slice(0, text.length - 1)),
        deletingSpeed
      );
    } else if (!isDeleting && text.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  
  return (
    <motion.div className="suraj-wrapper">
      {/* 🌌 FAR GALAXY */}
      <motion.div
        className="stars stars-far"
        style={{
          backgroundImage: `url(${galaxyImg})`,
          y: galaxyScrollY,
          x: farX,
        }}
      />

      {}
      <motion.div
        className="stars stars-mid"
        style={{
          x: midX,
          y: midY,
        }}
      />

      {}
      <motion.div
        className="stars stars-near"
        style={{
          x: nearX,
          y: nearY,
        }}
      />

      {}
      <div className="content">
        {}
        <nav className="nav">
          <h2 className="logo">Suraj</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>

        {}
        <section className="hero">
          <div className="hero-left">
            <h1>
              Hi, My name is <span>Suraj</span>
            </h1>

            <h2>
              and I am a{" "}
              <span className="dynamic-text">
                {text}
                <span className="cursor">|</span>
              </span>
            </h2>

            <div className="buttons">
              <button className="btn">Resume</button>
              <button className="btn secondary">GitHub</button>
            </div>
          </div>

          <div className="hero-right">
            <img src={profileImg} alt="Suraj" />
          </div>
        </section>

        {}
        <section className="skills">
          <h2>My Skills</h2>
          <div className="skill-grid">
            {["HTML", "CSS", "JavaScript", "React", "C", "Java"].map((skill) => (
              <motion.div
                key={skill}
                className={`skill-card ${skill.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {}
        <section className="contact">
          <div className="contact-card">
            <h2>Contact Me</h2>
            <p>Let’s build something cool together 🚀</p>

            <div className="contact-buttons">
              <button className="btn contact-btn linkedin">LinkedIn</button>
              <button className="btn contact-btn email">Email</button>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
