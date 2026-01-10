import { motion } from 'motion/react';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateX: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.6, 0.05, 0.01, 0.9],
        type: "spring",
        stiffness: 100
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl relative z-10"
      >
        <motion.div variants={titleVariants} className="relative">
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-emerald-600/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <h1 className="text-6xl md:text-8xl mb-6 relative px-4 py-2" style={{ lineHeight: '1.3' }}>
            {['J', 'i', 'y', 'a', ' ', 'A', 'g', 'r', 'a', 'w', 'a', 'l'].map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block bg-gradient-to-r from-purple-400 via-purple-600 to-emerald-400 bg-clip-text text-transparent"
                style={{ 
                  display: 'inline-block',
                  minWidth: letter === ' ' ? '0.5em' : 'auto',
                  padding: '0 0.05em'
                }}
                initial={{ opacity: 0, y: -50, rotateZ: -10 }}
                animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.2,
                  color: '#10b981',
                  textShadow: '0 0 20px #10b981',
                  transition: { duration: 0.2 },
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.div variants={subtitleVariants} className="relative">
          <motion.p
            className="text-xl md:text-2xl text-purple-300 mb-4"
            animate={{
              textShadow: [
                '0 0 10px rgba(168, 85, 247, 0.5)',
                '0 0 20px rgba(168, 85, 247, 0.8)',
                '0 0 10px rgba(168, 85, 247, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="inline-block mr-2 mb-1" size={20} />
            Frontend Developer & UI/UX Enthusiast
            <Sparkles className="inline-block ml-2 mb-1" size={20} />
          </motion.p>
        </motion.div>

        <motion.div
          variants={subtitleVariants}
          transition={{ delay: 0.3 }}
        >
          <motion.p
            className="text-emerald-300 text-lg mb-8"
            animate={{
              textShadow: [
                '0 0 10px rgba(16, 185, 129, 0.5)',
                '0 0 20px rgba(16, 185, 129, 0.8)',
                '0 0 10px rgba(16, 185, 129, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            B.Tech ECE Student | Building Digital Experiences
          </motion.p>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full border border-purple-400 relative overflow-hidden group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-emerald-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                  '0 0 40px rgba(168, 85, 247, 0.8)',
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-full border border-emerald-400 relative overflow-hidden group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-purple-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">Get in Touch</span>
            <motion.div
              className="absolute inset-0"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(16, 185, 129, 0.5)',
                  '0 0 40px rgba(16, 185, 129, 0.8)',
                  '0 0 20px rgba(16, 185, 129, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={40} />
        </motion.div>
      </motion.button>
    </section>
  );
}