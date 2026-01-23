import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import UniverseBG from "../components/UniverseBG";
import "./Khushi.css";

export default function Khushi() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const cx = useSpring(mx, { stiffness: 250, damping: 20 });
  const cy = useSpring(my, { stiffness: 250, damping: 20 });

  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX - 150);
      my.set(e.clientY - 150);
    };

    const click = (e) => {
      setRipple({ x: e.clientX, y: e.clientY, show: true });
      setTimeout(() => {
        setRipple((r) => ({ ...r, show: false }));
      }, 600);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, [mx, my]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      <UniverseBG />
      {/* ================= HERO ================= */}
      <section className="hero">
        <motion.div className="cursor-glow" style={{ x: cx, y: cy }} />
        <motion.div className="trail" style={{ x: cx, y: cy }} />

        {ripple.show && (
          <motion.div
            className="click-ripple"
            style={{ left: ripple.x - 40, top: ripple.y - 40 }}
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}

        <div className="fire-glow" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="spark spark-1" />
        <div className="spark spark-2" />
        <div className="spark spark-3" />

        <div className="profile-wrap">
          <img src="/khushi.JPG" alt="Khushi Bhaskar" />
        </div>

        <motion.h1
          className="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Khushi Bhaskar
        </motion.h1>

        <p className="tagline">
          Lead – <span>DevSource 🔥</span>
        </p>
      </section>

      {/* ================= ABOUT ================= */}
      <motion.section className="intro" onMouseMove={handleMouseMove}>
        {/* Interactive Cosmic Background */}
        <div 
          className="cosmic-bg"
          style={{
            background: `
              radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(138,92,255,0.15) 0%, transparent 50%),
              radial-gradient(circle at 20% 30%, rgba(51,214,255,0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(255,119,0,0.08) 0%, transparent 40%)
            `,
          }}
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: `rgba(${Math.random() > 0.5 ? '138,92,255' : '51,214,255'}, ${Math.random() * 0.6 + 0.2})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Orbiting Rings */}
        <motion.div
          className="cosmic-ring ring-one"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="cosmic-ring ring-two"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-card"
          initial={{ y: 60, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Border Glow */}
          <motion.div
            className="card-glow"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner Cosmic Glows */}
          <div className="inner-glow glow-top" />
          <div className="inner-glow glow-bottom" />

          <p>
            I'm <strong className="highlight-purple">Khushi Bhaskar</strong>, currently leading{" "}
            <strong className="highlight-orange">DevSource</strong>, a developer community focused on
            hands-on learning, open-source culture, and collaborative growth.
            <br /><br />
            My journey started with curiosity — learning by building real
            projects, contributing to open source, and growing alongside
            passionate developers.
            <br /><br />
            Over time, these experiences shaped me into a developer who enjoys
            building impactful products while helping others grow through
            mentorship and leadership.
          </p>

          {/* Floating Accent Stars */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="accent-star"
              style={{
                background: i % 2 === 0 ? '#8a5cff' : '#33d6ff',
                boxShadow: `0 0 10px ${i % 2 === 0 ? '#8a5cff' : '#33d6ff'}`,
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 2) * 70}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Bottom Accent Line */}
        <motion.div
          className="bottom-accent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />
      </motion.section>

     
      {/* ================= JOURNEY TIMELINE ================= */}
      <motion.section className="journey">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Journey
        </motion.h2>

        <div className="timeline">
          {[
            {
              phase: "Phase 0",
              title: "DevSource Member",
              desc: "Started as a learner, exploring web development through projects and open-source collaboration.",
            },
            {
              phase: "Phase 1",
              title: "Web Coordinator",
              desc: "Managed tasks, guided peers, and helped scale web initiatives within the community.",
            },
            {
              phase: "Phase 2",
              title: "CodeJam Winner",
              desc: "Won CodeJam by solving problems collaboratively under time pressure.",
            },
            {
              phase: "Phase 3",
              title: "Web Dev Mentor - DevCamp",
              desc: "Taught web development fundamentals with a focus on hands-on learning and confidence building.",
            },
            {
              phase: "Now",
              title: "Lead - DevSource",
              desc: "Leading the community with a vision centered around growth, collaboration, and impact.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-phase">{item.phase}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
       {/* ================= SKILLS ================= */}
      <section className="skills-split">
        <div className="skills-content">
          <h2>Skills & Expertise</h2>
          <div className="skills-wrap">
            <div className="skill-pill">React</div>
            <div className="skill-pill">JavaScript</div>
            <div className="skill-pill">Node.js</div>
            <div className="skill-pill">HTML/CSS</div>
            <div className="skill-pill">Mongo DB</div>
            <div className="skill-pill">Express.js</div>
            <div className="skill-pill">Docker</div>
            <div className="skill-pill">Framer Motion</div>
            <div className="skill-pill">Tailwind css</div>
            <div className="skill-pill">Figma</div>
            <div className="skill-pill">GSAP</div>
            <div className="skill-pill">Open Source</div>
            <div className="skill-pill">Project Management</div>
            <div className="skill-pill">Git & GitHub</div>
            <div className="skill-pill">Leadership</div>
            
          </div>
        </div>
        <div className="skills-image">
          <img src="/cat.webp" alt="Skills" />
        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Contact Me</h2>

          <div className="contact-cards">
            {[
              {
                title: "GitHub",
                desc: "Projects & Open Source",
                icon: <FaGithub />,
                link: "https://github.com/Khushi-bhaskar01",
              },
              {
                title: "LinkedIn",
                desc: "Professional Profile",
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/khushi-bhaskar-b00586324/",
              },
              {
                title: "Mail",
                desc: "Let's Talk",
                icon: <FaEnvelope />,
                link: "mailto:khushibhaskar.2006@gmail.com",
              },
            ].map((card, index) => (
              <motion.a
                key={card.title}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.25 }}
              >
                <div className="contact-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}