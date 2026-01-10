import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Sparkles } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl w-full"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl mb-12 text-center relative"
        >
          {['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'].map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
              }}
              whileHover={{
                scale: 1.3,
                rotate: [0, -10, 10, 0],
                textShadow: '0 0 30px rgba(16, 185, 129, 0.8)',
                transition: { duration: 0.4 },
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            {[
              "I'm Jiya Agrawal, a first-year B.Tech ECE student with a passion for technology and design. I enjoy exploring the latest trends in web development and currently work as a frontend developer with a strong interest in UI/UX.",
              "I have experience working with HTML, CSS, JavaScript, React, and Python (beginner–intermediate level), along with Figma for UI/UX design. I love creating clean, visually appealing, and user-friendly website designs.",
              "My interests lie in combining creativity with technology to build meaningful digital experiences. I'm always learning, experimenting, and exploring more in the world of web development and design."
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                whileHover={{
                  x: 10,
                  textShadow: '0 0 10px rgba(192, 132, 252, 0.5)',
                }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            {[
              {
                icon: Code2,
                color: 'purple',
                title: 'Development',
                text: 'Building responsive, performant web applications with modern technologies and best practices.',
              },
              {
                icon: Palette,
                color: 'emerald',
                title: 'UI/UX Design',
                text: 'Crafting beautiful, intuitive user interfaces that provide exceptional user experiences.',
              },
              {
                icon: Sparkles,
                color: 'purple',
                title: 'Always Learning',
                text: 'Constantly exploring new technologies and design trends to stay ahead in the ever-evolving tech world.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  custom={index}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  transition={{ delay: index * 0.2 + 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    boxShadow: item.color === 'purple'
                      ? '0 0 40px rgba(168, 85, 247, 0.6)'
                      : '0 0 40px rgba(16, 185, 129, 0.6)',
                  }}
                  className={`bg-gradient-to-br ${
                    item.color === 'purple'
                      ? 'from-purple-900/30 to-emerald-900/30 border-purple-500/30'
                      : 'from-emerald-900/30 to-purple-900/30 border-emerald-500/30'
                  } p-6 rounded-2xl border backdrop-blur-sm cursor-pointer`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon
                        className={item.color === 'purple' ? 'text-purple-400' : 'text-emerald-400'}
                        size={28}
                      />
                    </motion.div>
                    <h3 className={`text-xl ${item.color === 'purple' ? 'text-purple-300' : 'text-emerald-300'}`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}