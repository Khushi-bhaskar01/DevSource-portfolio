import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function TechyOverlay() {
  const [dataStreams, setDataStreams] = useState([]);

  useEffect(() => {
    const streams = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
    }));
    setDataStreams(streams);
  }, []);

  const binaryChars = ['0', '1', '0', '1', '1', '0', '1', '0'];
  const codeChars = ['<', '>', '/', '{', '}', '[', ']', '(', ')'];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Corner Brackets */}
      <motion.div
        className="absolute top-4 left-4 text-purple-500/30 text-2xl"
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ╔═══
      </motion.div>

      <motion.div
        className="absolute top-4 right-4 text-emerald-500/30 text-2xl"
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        ═══╗
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4 text-emerald-500/30 text-2xl"
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        ╚═══
      </motion.div>

      <motion.div
        className="absolute bottom-4 right-4 text-purple-500/30 text-2xl"
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      >
        ═══╝
      </motion.div>

      {/* Data Streams */}
      {dataStreams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute top-0 text-purple-400/20 font-mono text-xs"
          style={{ left: stream.left }}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '100vh', opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: stream.delay,
            ease: 'linear',
          }}
        >
          {binaryChars.map((char, i) => (
            <div key={i} className="mb-2">
              {char}
            </div>
          ))}
        </motion.div>
      ))}

      {/* Floating Code Symbols */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-emerald-400/10 font-mono text-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          {codeChars[Math.floor(Math.random() * codeChars.length)]}
        </motion.div>
      ))}

      {/* Glowing Orbs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              i % 2 === 0
                ? 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Circuit Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        style={{ filter: 'blur(1px)' }}
      >
        <motion.path
          d="M 0 50 L 200 50 L 200 150 L 400 150"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M 100% 30% L 80% 30% L 80% 50% L 60% 50%"
          stroke="url(#grad2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgb(168, 85, 247)', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: 'rgb(168, 85, 247)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(16, 185, 129)', stopOpacity: 0 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgb(16, 185, 129)', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: 'rgb(16, 185, 129)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(168, 85, 247)', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* HUD Elements */}
      <div className="absolute top-20 left-8 text-purple-400/20 font-mono text-xs">
        <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }}>
          &gt; SYSTEM ONLINE
        </motion.div>
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          &gt; PORTFOLIO.INIT
        </motion.div>
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          &gt; STATUS: ACTIVE
        </motion.div>
      </div>

      <div className="absolute top-20 right-8 text-emerald-400/20 font-mono text-xs text-right">
        <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }}>
          FPS: 60
        </motion.div>
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          PING: 12ms
        </motion.div>
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          CPU: 45%
        </motion.div>
      </div>
    </div>
  );
}
