import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-4xl w-full"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl mb-12 text-center relative"
        >
          {['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n'].map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -100, scale: 0 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                type: 'spring',
                stiffness: 150,
              }}
              whileHover={{
                scale: 1.5,
                y: -10,
                textShadow: '0 0 30px rgba(168, 85, 247, 1)',
                transition: { duration: 0.3 },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="relative"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-emerald-500 hidden md:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ transformOrigin: 'top' }}
          />

          <motion.div
            className="bg-gradient-to-br from-purple-900/30 to-emerald-900/30 p-8 md:pl-20 rounded-2xl border border-purple-500/30 backdrop-blur-sm relative overflow-hidden group"
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 60px rgba(168, 85, 247, 0.4)',
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-emerald-600/10"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.div
              className="absolute left-6 top-8 w-5 h-5 bg-purple-500 rounded-full border-4 border-black hidden md:block"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 1, type: 'spring' }}
              whileHover={{
                scale: 1.5,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)',
              }}
            />
            
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <motion.div
                className="bg-purple-600/30 p-3 rounded-xl border border-purple-500/30"
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <GraduationCap size={32} className="text-purple-400" />
                </motion.div>
              </motion.div>
              <div className="flex-1">
                <motion.h3
                  className="text-2xl md:text-3xl text-purple-300 mb-2"
                  whileHover={{
                    textShadow: '0 0 20px rgba(192, 132, 252, 1)',
                    x: 10,
                  }}
                >
                  Bachelor of Technology
                </motion.h3>
                <motion.p
                  className="text-xl text-emerald-300 mb-3"
                  whileHover={{
                    textShadow: '0 0 20px rgba(52, 211, 153, 1)',
                    x: 10,
                  }}
                >
                  Electronics and Communication Engineering (ECE)
                </motion.p>
              </div>
            </div>

            <div className="space-y-3 ml-0 md:ml-16 relative z-10">
              <motion.div
                className="flex items-center gap-2 text-gray-400"
                whileHover={{
                  x: 10,
                  color: '#10b981',
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                >
                  <MapPin size={18} className="text-emerald-400" />
                </motion.div>
                <span>Guru Gobind Singh Indraprastha University | USICT</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-gray-400"
                whileHover={{
                  x: 10,
                  color: '#a855f7',
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Calendar size={18} className="text-purple-400" />
                </motion.div>
                <span>1st Year | 2025 - 2029</span>
              </motion.div>
            </div>

            <div className="mt-6 ml-0 md:ml-16 pt-6 border-t border-purple-500/20 relative z-10">
              <motion.p
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
                whileHover={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                }}
              >
                Currently pursuing my undergraduate degree in Electronics and Communication Engineering 
                while actively developing my skills in web development and UI/UX design. Passionate about 
                bridging the gap between technology and design.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}