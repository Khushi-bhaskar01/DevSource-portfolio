import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Rocket,
  Handshake,
  Lightbulb,
  Star,
  Sparkles,
  ExternalLink,
  CheckSquare,
  Cloud,
  ShoppingCart
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Refs for scrolling to sections
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'CSS/Tailwind',
    'HTML',
    'MongoDB',
    'Express.js',
    'Git',
    'REST APIs',
    'SQL',
    'Loading...'
  ];

  const projects = [
    {
      title: 'To-Do List App',
      description:
        'A feature-rich task management application with local storage, drag & drop functionality, and beautiful UI.',
      image:
        'https://images.unsplash.com/photo-1723505613384-b55168b80568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://cloudy2006.github.io/TO-DO-List/',
      icon: <CheckSquare className="w-6 h-6" />
    },
    {
      title: 'Weather Application',
      description:
        'Real-time weather app with location search, forecast display, and dynamic weather animations.',
      image:
        'https://images.unsplash.com/photo-1558600053-2efe29d4c053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tech: ['React', 'Weather API', 'CSS'],
      link: 'https://cloudy2006.github.io/WeatherAPP/',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: 'Full Stack E-Commerce',
      description:
        'Complete e-commerce platform with user authentication, payment integration, and admin dashboard.',
      image:
        'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://e-commerce-e87k.vercel.app/',
      icon: <ShoppingCart className="w-6 h-6" />
    }
  ];

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gray-700 rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gray-800 rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-slate-700 rounded-full blur-3xl opacity-5"
          animate={{
            x: [0, 150, -150, 0],
            y: [0, -150, 150, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Cursor follower */}
      <motion.div
        className="fixed w-4 h-4 bg-gray-400 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-gray-400 text-lg">Hello, I'm</span>
            </motion.div>
            
            <motion.h1
              className="text-7xl md:text-8xl mb-4 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                ARNAV
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <motion.p
                className="text-2xl md:text-3xl text-gray-400"
                animate={{
                  color: ['#9CA3AF', '#6B7280', '#4B5563', '#9CA3AF'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                Creative Developer & Designer
              </motion.p>
            </motion.div>

            <motion.p
              className="text-lg text-gray-500 mb-8 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Crafting beautiful digital experiences with code and creativity. 
              Passionate about building innovative solutions that make a difference.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                onClick={() => scrollToSection(contactRef)}
                className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full font-semibold"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(75, 85, 99, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              <motion.button
                onClick={() => scrollToSection(projectsRef)}
                className="px-8 py-3 border-2 border-gray-700 rounded-full font-semibold"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(55, 65, 81, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96 mx-auto"
                whileHover={{ scale: 1.05 }}
              >
                {/* Glowing border effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-2xl blur-xl opacity-30"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-gray-800">
                  <ImageWithFallback
                    src="./Arnav Website photo.jpeg"
                    alt="Arnav"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Orbiting icons */}
            <motion.div
              className="absolute top-1/2 left-1/2"
              style={{ y: y1, rotate }}
            >
              <Star className="w-8 h-8 text-gray-500 -ml-32 -mt-32" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-1/2"
              style={{ y: y2 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-gray-600 ml-32 mt-32" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <motion.div
          className="max-w-4xl w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: <Code className="w-8 h-8" />, title: "Clean Code", desc: "Writing maintainable and scalable solutions" },
              { icon: <Palette className="w-8 h-8" />, title: "Creative Design", desc: "Pixel-perfect UI with attention to detail" },
              { icon: <Rocket className="w-8 h-8" />, title: "Fast Delivery", desc: "Efficient workflow and timely execution" },
              { icon: <Handshake className="w-8 h-8" />, title: "Teamwork Oriented", desc: "Beliving in help to/from others" },
              { icon: <Lightbulb className="w-8 h-8" />, title: "Eager To Learn", desc: "Interested to learn more about this domain" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gray-800"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(75, 85, 99, 0.5)'
                }}
              >
                <motion.div
                  className="text-gray-400 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="min-h-screen flex items-center justify-center px-6 relative py-20">
        <motion.div
          className="max-w-6xl w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-gray-300 to-gray-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl overflow-hidden border border-gray-800"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(156, 163, 175, 0.5)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 0.3 }}
                  />
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <motion.div
                    className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm p-3 rounded-full z-20"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.icon}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl mb-3">{project.title}</h3>
                  <p className="text-gray-500 mb-4 text-sm">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <motion.div
          className="max-w-4xl w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              Technologies & Skills
            </span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="px-6 py-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(55, 65, 81, 0.8)',
                  borderColor: 'rgba(156, 163, 175, 0.5)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
                }}
              >
                <span className="text-gray-300 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="min-h-screen flex items-center justify-center px-6 relative">
        <motion.div
          className="max-w-4xl w-full text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-500 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Have a project in mind? Let's create something amazing together!
          </motion.p>

          <motion.div
            className="flex justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: <Github className="w-8 h-8" />, 
                label: "GitHub",
                 link: "https://github.com/CLOUDY2006" },
              { icon: <Linkedin className="w-8 h-8" />, 
                label: "LinkedIn",
                link:"https://www.linkedin.com/in/arnav-kumar-gupta-9a1aa4320/" },
              { icon: <Mail className="w-8 h-8" />, 
                label: "Email"},
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-sm p-6 rounded-full border border-gray-800"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0 30px rgba(75, 85, 99, 0.4)'
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:arnav@example.com"
              className="inline-block px-12 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-xl font-semibold border border-gray-700"
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 0 40px rgba(75, 85, 99, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-16 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>© 2026 Arnav. Crafted with passion and creativity.</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}