import { motion } from 'motion/react';

export function EnergyWaves() {
  return (
    <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
      {/* Diagonal energy beams */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`beam-${i}`}
          className="absolute h-1 w-full"
          style={{
            background: i % 2 === 0
              ? 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.3), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.3), transparent)',
            top: `${i * 15}%`,
            transform: 'rotate(-45deg)',
            transformOrigin: 'center',
          }}
          animate={{
            x: ['-100%', '200%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 1,
            ease: 'linear',
          }}
        />
      ))}

      {/* Ripple effects */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`ripple-${i}`}
          className="absolute rounded-full border-2"
          style={{
            borderColor: i % 2 === 0 ? 'rgba(168, 85, 247, 0.2)' : 'rgba(16, 185, 129, 0.2)',
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{
            width: ['0px', '800px'],
            height: ['0px', '800px'],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Vertical energy lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`vline-${i}`}
          className="absolute w-px h-full"
          style={{
            left: `${i * 5}%`,
            background: i % 2 === 0
              ? 'linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.1), transparent)'
              : 'linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.1), transparent)',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Horizontal energy lines */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`hline-${i}`}
          className="absolute h-px w-full"
          style={{
            top: `${i * 7}%`,
            background: i % 2 === 0
              ? 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.1), transparent)'
              : 'linear-gradient(to right, transparent, rgba(168, 85, 247, 0.1), transparent)',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Pulse circles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0
              ? 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
          }}
          animate={{
            width: ['50px', '300px', '50px'],
            height: ['50px', '300px', '50px'],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Laser sweeps */}
      <motion.div
        className="absolute w-full h-2"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.5), transparent)',
          boxShadow: '0 0 30px rgba(168, 85, 247, 0.8)',
        }}
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute w-2 h-full"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.5), transparent)',
          boxShadow: '0 0 30px rgba(16, 185, 129, 0.8)',
        }}
        animate={{
          left: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Spinning radar */}
      <svg
        className="absolute"
        style={{
          left: '10%',
          top: '20%',
          width: '400px',
          height: '400px',
          opacity: 0.15,
        }}
      >
        <motion.line
          x1="200"
          y1="200"
          x2="200"
          y2="0"
          stroke="url(#radarGrad)"
          strokeWidth="2"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px' }}
        />
        <circle cx="200" cy="200" r="150" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" fill="none" />
        <circle cx="200" cy="200" r="100" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" fill="none" />
        <circle cx="200" cy="200" r="50" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" fill="none" />
        <defs>
          <linearGradient id="radarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(168, 85, 247, 0.8)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(168, 85, 247, 0)', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Holographic grid in corner */}
      <svg
        className="absolute"
        style={{
          right: '5%',
          bottom: '10%',
          width: '500px',
          height: '500px',
          opacity: 0.15,
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.line
            key={`grid-v-${i}`}
            x1={i * 50}
            y1="0"
            x2={i * 50}
            y2="500"
            stroke="rgba(16, 185, 129, 0.3)"
            strokeWidth="1"
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.line
            key={`grid-h-${i}`}
            x1="0"
            y1={i * 50}
            x2="500"
            y2={i * 50}
            stroke="rgba(168, 85, 247, 0.3)"
            strokeWidth="1"
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
