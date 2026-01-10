import { motion } from 'motion/react';

export function FloatingParticles() {
  return (
    <div className="fixed inset-0 -z-8 pointer-events-none overflow-hidden">
      {/* Large floating tech icons */}
      {Array.from({ length: 20 }).map((_, i) => {
        const icons = ['{ }', '< >', '[ ]', '( )', '//', '/*', '*/', '=> ', 'fn', 'var', 'let', 'const', 'if', 'for'];
        const icon = icons[i % icons.length];
        
        return (
          <motion.div
            key={`tech-icon-${i}`}
            className="absolute font-mono text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: i % 2 === 0 ? 'rgba(168, 85, 247, 0.1)' : 'rgba(16, 185, 129, 0.1)',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          >
            {icon}
          </motion.div>
        );
      })}

      {/* Small glowing particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? '#a855f7' : '#10b981',
            boxShadow: i % 2 === 0 
              ? '0 0 10px #a855f7' 
              : '0 0 10px #10b981',
          }}
          animate={{
            y: [0, Math.random() * -200 - 100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Dotted circles */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.svg
          key={`circle-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 25}%`,
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            rotate: {
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: 'linear',
            },
            opacity: {
              duration: 5,
              repeat: Infinity,
            },
          }}
        >
          <circle
            cx="50%"
            cy="50%"
            r={`${40 + i * 10}%`}
            stroke={i % 2 === 0 ? 'rgba(168, 85, 247, 0.2)' : 'rgba(16, 185, 129, 0.2)'}
            strokeWidth="2"
            strokeDasharray="5,10"
            fill="none"
          />
        </motion.svg>
      ))}

      {/* Lightning bolts */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`lightning-${i}`}
          className="absolute w-1"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10%',
            height: '40vh',
            background: i % 2 === 0
              ? 'linear-gradient(to bottom, rgba(168, 85, 247, 0.6), transparent)'
              : 'linear-gradient(to bottom, rgba(16, 185, 129, 0.6), transparent)',
            boxShadow: i % 2 === 0
              ? '0 0 20px rgba(168, 85, 247, 0.8)'
              : '0 0 20px rgba(16, 185, 129, 0.8)',
          }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: Math.random() * 10 + 5,
            repeatDelay: Math.random() * 15 + 10,
          }}
        />
      ))}

      {/* Connecting dots effect */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {Array.from({ length: 3 }).map((_, i) => {
          const points = Array.from({ length: 5 }).map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
          }));
          
          return (
            <motion.g key={`path-${i}`}>
              <motion.polyline
                points={points.map(p => `${p.x}%,${p.y}%`).join(' ')}
                stroke={i % 2 === 0 ? 'rgba(168, 85, 247, 0.3)' : 'rgba(16, 185, 129, 0.3)'}
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: [0, 100],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              {points.map((point, j) => (
                <motion.circle
                  key={`dot-${i}-${j}`}
                  cx={`${point.x}%`}
                  cy={`${point.y}%`}
                  r="3"
                  fill={i % 2 === 0 ? '#a855f7' : '#10b981'}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: j * 0.2,
                  }}
                />
              ))}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
