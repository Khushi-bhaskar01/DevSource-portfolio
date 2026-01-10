import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jiyaaggarwal267@gmail.com',
      link: 'mailto:jiyaaggarwal267@gmail.com',
      color: 'purple',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '8882550313',
      link: 'tel:8882550313',
      color: 'emerald',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'jiyaaggarwal267-maker',
      link: 'https://github.com/jiyaaggarwal267-maker',
      color: 'purple',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Jiya Agrawal',
      link: 'https://www.linkedin.com/in/jiya-agrawal-24460537a/',
      color: 'emerald',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-4xl w-full"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl mb-12 text-center relative"
        >
          {['C', 'o', 'n', 'n', 'e', 'c', 't'].map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, rotateY: -90, scale: 0 }}
              animate={isInView ? { opacity: 1, rotateY: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.3,
                rotateZ: [0, -10],
                textShadow: '0 0 30px rgba(16, 185, 129, 1)',
                transition: { duration: 0.2 },
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  rotate: [0, -2, 2, 0],
                }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-br ${
                  method.color === 'purple'
                    ? 'from-purple-900/30 to-emerald-900/20 border-purple-500/30'
                    : 'from-emerald-900/30 to-purple-900/20 border-emerald-500/30'
                } p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    method.color === 'purple'
                      ? 'from-purple-600/20 to-emerald-600/20'
                      : 'from-emerald-600/20 to-purple-600/20'
                  }`}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                <div className="flex items-center gap-4 relative z-10">
                  <motion.div
                    className={`p-3 rounded-lg ${
                      method.color === 'purple'
                        ? 'bg-purple-600/30 border-purple-500/30'
                        : 'bg-emerald-600/30 border-emerald-500/30'
                    } border`}
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.6 }}
                    animate={{
                      boxShadow: [
                        `0 0 10px ${method.color === 'purple' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                        `0 0 20px ${method.color === 'purple' ? 'rgba(168, 85, 247, 0.6)' : 'rgba(16, 185, 129, 0.6)'}`,
                        `0 0 10px ${method.color === 'purple' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                      ],
                    }}
                    transition={{
                      duration: 0.6,
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: 'linear',
                      },
                    }}
                  >
                    <Icon
                      size={24}
                      className={method.color === 'purple' ? 'text-purple-400' : 'text-emerald-400'}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-1">{method.label}</p>
                    <motion.p
                      className={`${
                        method.color === 'purple' ? 'text-purple-300' : 'text-emerald-300'
                      } break-all`}
                      whileHover={{
                        textShadow: `0 0 15px ${method.color === 'purple' ? 'rgba(192, 132, 252, 0.8)' : 'rgba(52, 211, 153, 0.8)'}`,
                      }}
                    >
                      {method.value}
                    </motion.p>
                  </div>
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <Send size={18} className="text-gray-500 group-hover:text-white transition-colors" />
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <div className="inline-flex gap-4">
            {[
              {
                href: 'https://github.com/jiyaaggarwal267-maker',
                icon: Github,
                color: 'purple',
              },
              {
                href: 'https://www.linkedin.com/in/jiya-agrawal-24460537a/',
                icon: Linkedin,
                color: 'emerald',
              },
              {
                href: 'mailto:jiyaaggarwal267@gmail.com',
                icon: Mail,
                color: 'purple',
              },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 ${
                    social.color === 'purple'
                      ? 'bg-purple-600/20 border-purple-500/30'
                      : 'bg-emerald-600/20 border-emerald-500/30'
                  } border rounded-full relative`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        `0 0 20px ${social.color === 'purple' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                        `0 0 40px ${social.color === 'purple' ? 'rgba(168, 85, 247, 0.6)' : 'rgba(16, 185, 129, 0.6)'}`,
                        `0 0 20px ${social.color === 'purple' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  <Icon
                    size={24}
                    className={social.color === 'purple' ? 'text-purple-400' : 'text-emerald-400'}
                  />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.p
            animate={{
              textShadow: [
                '0 0 5px rgba(168, 85, 247, 0.3)',
                '0 0 10px rgba(16, 185, 129, 0.3)',
                '0 0 5px rgba(168, 85, 247, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © 2026 Jiya Agrawal. Built with passion and code ✨
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}