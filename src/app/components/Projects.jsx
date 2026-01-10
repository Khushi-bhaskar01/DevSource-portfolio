import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'E-Commerce Website',
      description:
        'A fully functional e-commerce platform with product listings, shopping cart, and checkout functionality.',
      link: 'https://jiyaaggarwal267-maker.github.io/website/',
      image:
        'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['React', 'JavaScript', 'CSS'],
    },
    {
      title: 'Weather App',
      description:
        'Real-time weather application that provides current weather conditions and forecasts for any location.',
      link: 'https://jiyaaggarwal267-maker.github.io/weather-app/',
      image:
        'https://images.unsplash.com/photo-1631728815316-323e4340748d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Todo List App',
      description:
        'An intuitive task management application to organize and track daily tasks efficiently.',
      link: 'https://jiyaaggarwal267-maker.github.io/todo-app/',
      image:
        'https://images.unsplash.com/photo-1598791318878-10e76d178023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Sign Up/Login Form',
      description:
        'Secure authentication system with user registration and login functionality.',
      link: 'https://jiyaaggarwal267-maker.github.io/react-app/',
      image:
        'https://images.unsplash.com/photo-1762330469123-ce98036eff16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['React', 'JavaScript', 'UI/UX'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section
      id="projects"
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
          className="text-5xl md:text-6xl mb-12 text-center"
        >
          {['P', 'r', 'o', 'j', 'e', 'c', 't', 's'].map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.5,
                rotate: 360,
                textShadow: '0 0 40px rgba(16, 185, 129, 1)',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                rotate: [0, -2, 2, 0],
              }}
              className="group relative bg-gradient-to-br from-purple-900/20 to-emerald-900/20 rounded-2xl overflow-hidden border border-purple-500/30 backdrop-blur-sm cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15, rotate: 2 }}
                />
              </div>

              <div className="p-6">
                <motion.h3
                  className="text-2xl mb-2 text-purple-300"
                  whileHover={{
                    textShadow:
                      '0 0 20px rgba(192, 132, 252, 0.8)',
                  }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-emerald-600/30 text-emerald-300 rounded-full text-sm border border-emerald-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} />
                  View Project
                </motion.a>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-purple-600/80 p-2 rounded-full">
                  <Github size={20} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
