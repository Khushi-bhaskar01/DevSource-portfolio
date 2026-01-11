import React from 'react';
import { motion } from 'framer-motion';


const Portfolio = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const headingAnimation = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  // Gradient backgrounds from Figma
  const heroGradient = 'linear-gradient(134deg, rgba(152, 77, 56, 1) 0%, rgba(24, 30, 65, 1) 58%)';
  const introGradient = 'linear-gradient(180deg, rgba(206, 75, 254, 1) 15%, rgba(49, 119, 248, 1) 55%, rgba(105, 76, 172, 1) 78%)';
  const skillsGradient = 'linear-gradient(90deg, rgba(124, 103, 246, 1) 0%, rgba(28, 105, 131, 1) 100%)';

  return (
    <div className="w-full overflow-x-hidden" style={{ minWidth: '100%' }}>
      {/* Hero Section */}
      <section 
        className="w-full h-[900px] relative pt-5 px-[122px]"
        style={{ background: heroGradient }}
      >
        {/* Navigation */}
        <motion.nav 
          className="flex justify-between items-center w-full max-w-[1196px] mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1">
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-xl leading-[1.5]" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '1.5%' }}>J</span>
              </div>
              <span className="text-white text-xl leading-[1.5]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Jiya</span>
            </div>
          </div>
          <div className="flex gap-10 p-2.5">
            <a href="#home" className="text-white text-xl leading-[1.5] no-underline hover:opacity-70 transition-opacity" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Home</a>
            <a href="#about" className="text-white text-xl leading-[1.5] no-underline hover:opacity-70 transition-opacity" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>About</a>
            <a href="#skills" className="text-white text-xl leading-[1.5] no-underline hover:opacity-70 transition-opacity" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Skills</a>
          </div>
        </motion.nav>

        {/* Hero Content */}
        <div className="relative max-w-[1196px] mx-auto h-[calc(100%-100px)]">
          {/* Vertical J I Y A Text - Left side, vertically positioned */}
          <motion.div 
            className="absolute left-0 top-[337px] flex flex-col gap-[25px]"
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
          >
            {['J', 'I', 'Y', 'A'].map((letter, i) => (
              <motion.span 
                key={i}
                custom={i} 
                variants={letterAnimation}
                className="block text-xl leading-[1.5]"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 500, 
                  letterSpacing: '500%',
                  color: 'rgba(255, 255, 255, 0.3)',
                  width: '30px'
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          <div className="relative -translate-y-[-60px] text-center z-10">
  <motion.h1
    className="-translate-x-[20px]"
    initial="hidden"
    animate="visible"
    variants={headingAnimation}
    style={{
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
      fontSize: '70px',
      lineHeight: '1.33em',
      letterSpacing: '0.43%',
      color: '#FFFFFF'
    }}
  >
    I’m Jiya Agrawal.
  </motion.h1>

  <motion.p
    className="mt-[12px]"
    initial="hidden"
    animate="visible"
    variants={textAnimation}
    transition={{ delay: 0.2 }}
    style={{
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '22px',
      lineHeight: '1.5em',
      letterSpacing: '1.36%',
      color: 'rgba(255, 255, 255, 0.5)'
    }}
  >
    Frontend Web Developer
  </motion.p>
</div>

          
          {/* Profile Image - Bottom Center */}
          <motion.div 
            className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[559px] h-[565px]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <img 
              src="/images/portfolio-jiya.png" 
              alt="Jiya Agrawal"
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0px 4px 4px rgba(147, 159, 226, 1)) drop-shadow(6px 5px 4px rgba(115, 134, 246, 1))'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Black Divider */}
      <div className="w-full h-[-30px] bg-black"></div>

      {/* Divider Line before Services */}
      <div 
        className="w-[calc(100%-244px)] max-w-[1197px] h-[3px] mx-auto"
        style={{ background: 'rgba(255, 255, 255, 0.5)' }}
      ></div>

      {/* About Section */}
      <section 
        id="about" 
        className="w-full py-[60px] px-[122px]"
        style={{ background: heroGradient }}
      >
        <div className="max-w-[1175px] mx-auto flex gap-[80px] items-center">
          <motion.div 
            className="w-[450px] h-[550px] flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <img 
              src="/images/about-image.png" 
              alt="About"
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            <div className="w-full h-full bg-white/10 rounded-lg hidden"></div>
          </motion.div>
          <motion.div 
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <motion.h2 
              className="mb-6 text-[50px] leading-[1.8em]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headingAnimation}
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                letterSpacing: '0.6000000238418579%',
                background: introGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              INTRODUCTION
            </motion.h2>
            <motion.p 
              className="text-[25px] leading-[1.8em]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                letterSpacing: '1.2000000476837158%',
                color: 'rgba(255, 255, 255, 0.5)'
              }}
            >
              I'm Jiya Agrawal, a first-year B.Tech ECE student with a passion for technology and design. I enjoy exploring the latest trends in web development and currently work as a frontend developer with a strong interest in UI/UX.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services/Skills Section */}
      <section 
        id="skills" 
        className="w-full py-[60px] px-[128px] overflow-x-hidden"
        style={{ background: heroGradient }}
      >
        <div className="max-w-[1191px] mx-auto flex items-start gap-[80px] relative pr-[60px]">
          {/* Skills Text */}
          <motion.div 
            className="w-[585px] flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.h2 
              className="mb-4 text-[50px] leading-[1.8em]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headingAnimation}
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                letterSpacing: '0.6000000238418579%',
                background: skillsGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              SKILLS & INTERESTS
            </motion.h2>
            <motion.p 
              className="text-xl leading-[1.8em]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                letterSpacing: '1.5000000596046448%',
                color: 'rgba(255, 255, 255, 0.5)'
              }}
            >
              I have experience working with HTML, CSS, JavaScript, React, and Python (beginner–intermediate level), along with Figma for UI/UX design. I love creating clean, visually appealing, and user-friendly website designs. My interests lie in combining creativity with technology to build meaningful digital experiences. I'm always learning, experimenting, and exploring more in the world of web development and design.
            </motion.p>
          </motion.div>
{/* Cards */}
<motion.div 
  className="flex flex-col gap-[60px] flex-shrink-0 -translate-x-[-30px]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={fadeInUp}
  transition={{ delay: 0.2 }}
>
  {/* UI Design Card */}
  <motion.div 
    className="w-[490px] h-[176px] rounded-[25px] p-[43px] flex items-center gap-[66px] relative"
    style={{
      background: 'rgba(255, 255, 255, 0.5)',
      boxShadow: '0px 10px 4px 0px rgba(0, 0, 0, 0.25)'
    }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
  >
    <div 
      className="w-[90px] h-[90px] rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: '#F0C149' }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 10L15 20H20V35H30V20H35L25 10Z" fill="black"/>
      </svg>
    </div>
    <motion.h3 
      className="text-[30px] leading-[1.3329999287923178em] text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textAnimation}
      style={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        letterSpacing: '1.0000000397364297%'
      }}
    >
      User Interface Design
    </motion.h3>
  </motion.div>

  {/* Website Design Card */}
  <motion.div 
    className="w-[490px] h-[176px] rounded-[25px] p-[43px] flex items-center gap-[66px] relative"
    style={{
      background: '#E9EDF0',
      boxShadow: '0px 10px 4px 0px rgba(0, 0, 0, 0.25)'
    }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
  >
    <div 
      className="w-[90px] h-[90px] rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: '#286F6C' }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="15" width="30" height="20" rx="2" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M10 20H40M15 25H35" stroke="white" strokeWidth="2"/>
      </svg>
    </div>
    <motion.h3 
      className="text-[30px] leading-[1.3329999287923178em] text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textAnimation}
      style={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        letterSpacing: '1.0000000397364297%'
      }}
    >
      Website Design
    </motion.h3>
  </motion.div>
</motion.div>

        </div>
      </section>

      {/* Divider Line after Services */}
      <div 
        className="w-[calc(100%-256px)] max-w-[1171px] h-[2px] mx-auto"
        style={{ background: 'rgba(255, 255, 255, 0.5)' }}
      ></div>

      {/* Footer */}
      <footer 
        className="w-full py-[60px] px-[122px]"
        style={{ background: heroGradient }}
      >
        <motion.div 
          className="max-w-[1186px] mx-auto flex justify-between items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex gap-10 items-center">
            {/* Social icons would go here */}
          </div>
          <motion.p 
            className="text-xl leading-[1.8em] text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textAnimation}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              letterSpacing: '1.5000000596046448%',
              color: 'rgba(255, 255, 255, 0.5)'
            }}
          >
            Created by Jiya | All Reserved!
          </motion.p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Portfolio;
