import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const STAR_COUNT = 42;

export default function UniverseBG() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const s = Array.from({ length: STAR_COUNT }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: Math.random() * 1.5 + 0.5,
    }));
    setStars(s);
  }, []);

  return (
    <div className="universe-bg" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <svg width="100%" height="100%" style={{ display: 'block' }}>
        {/* stars */}
        {stars.map((star, i) => (
          <motion.circle
            key={i}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.r}
            fill="rgba(255, 255, 255, 0.85)"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* subtle connections */}
        {stars.map((a, i) =>
          stars.map((b, j) => {
            if (i !== j && Math.abs(a.x - b.x) < 12 && Math.abs(a.y - b.y) < 12) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${a.x}%`}
                  y1={`${a.y}%`}
                  x2={`${b.x}%`}
                  y2={`${b.y}%`}
                  stroke="rgba(255,122,0,0.25)"
                  strokeWidth="0.4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.25, 0] }}
                  transition={{
                    duration: 5 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 6,
                  }}
                />
              );
            }
            return null;
          })
        )}
      </svg>
    </div>
  );
}