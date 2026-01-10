import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'HTML', level: 'Expert', percentage: 95, icon: '🌐' },
    { name: 'CSS', level: 'Expert', percentage: 95, icon: '🎨' },
    { name: 'JavaScript', level: 'Intermediate', percentage: 75, icon: '⚡' },
    { name: 'TypeScript', level: 'Intermediate', percentage: 70, icon: '📘' },
    { name: 'React', level: 'Intermediate', percentage: 75, icon: '⚛️' },
    { name: 'Python', level: 'Intermediate', percentage: 65, icon: '🐍' },
    { name: 'UI/UX Design', level: 'Intermediate', percentage: 80, icon: '✨' },
    { name: 'Figma', level: 'Intermediate', percentage: 80, icon: '🎯' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, type: 'spring', stiffness: 100 },
    },
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'from-purple-500 to-purple-700';
      case 'Intermediate':
        return 'from-emerald-500 to-emerald-700';
      default:
        return 'from-blue-500 to-blue-700';
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
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
          {['T', 'e', 'c', 'h', ' ', 'S', 't', 'a', 'c', 'k'].map(
            (letter, index) => (
              <motion.span
                key={index}
                className="inline-block bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -50, rotateZ: -180 }}
                animate={
                  isInView ? { opacity: 1, y: 0, rotateZ: 0 } : {}
                }
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  type: 'spring',
                  stiffness: 150,
                }}
                whileHover={{
                  scale: 1.4,
                  rotateZ: [0, -15, 15, 0],
                  textShadow: '0 0 30px rgba(168, 85, 247, 1)',
                  transition: { duration: 0.4 },
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            )
          )}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: [0, 1, -1, 0],
                boxShadow: '0 0 50px rgba(168, 85, 247, 0.5)',
              }}
              className="bg-gradient-to-br from-purple-900/20 to-emerald-900/20 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-emerald-600/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1 }}
              />

              <div className="flex items-center justify-between mb-3 relative z-10">
                <div className="flex items-center gap-3">
                  <motion.span
                    className="text-3xl"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {skill.icon}
                  </motion.span>
                  <motion.h3
                    className="text-xl text-white"
                    whileHover={{
                      textShadow:
                        '0 0 20px rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {skill.name}
                  </motion.h3>
                </div>

                <motion.span
                  className={`px-3 py-1 rounded-full text-sm ${
                    skill.level === 'Expert'
                      ? 'bg-purple-600/50 text-purple-200'
                      : skill.level === 'Intermediate'
                      ? 'bg-emerald-600/50 text-emerald-200'
                      : 'bg-blue-600/50 text-blue-200'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(168, 85, 247, 0.3)',
                      '0 0 20px rgba(168, 85, 247, 0.6)',
                      '0 0 10px rgba(168, 85, 247, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {skill.level}
                </motion.span>
              </div>

              <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${getLevelColor(
                    skill.level
                  )} rounded-full relative`}
                  initial={{ width: 0 }}
                  animate={
                    isInView
                      ? { width: `${skill.percentage}%` }
                      : { width: 0 }
                  }
                  transition={{
                    duration: 1.5,
                    delay: index * 0.1 + 0.3,
                    ease: 'easeOut',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              </div>

              <div className="mt-2 text-right">
                <motion.span
                  className="text-purple-300 text-sm"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  {skill.percentage}%
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
