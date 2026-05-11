'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  type: 'petal' | 'sparkle' | 'firefly' | 'dust';
  color: string;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const colors = {
      petal: ['#F8E1E7', '#F2C4CF', '#E89AAE', '#FBE8ED'],
      sparkle: ['#FFD700', '#D4AF37', '#F5E6A3'],
      firefly: ['#D4AF37', '#FFD700'],
      dust: ['#D4AF37', '#B8860B'],
    };

    const items: Particle[] = Array.from({ length: 35 }).map((_, i) => {
      const type: Particle['type'] = 
        i % 7 === 0 ? 'firefly' : 
        i % 5 === 0 ? 'sparkle' : 
        i % 4 === 0 ? 'dust' : 'petal';
      const typeColors = colors[type];

      return {
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 16,
        size: type === 'petal' ? 8 + Math.random() * 14 : 3 + Math.random() * 6,
        opacity: type === 'firefly' ? 0.3 + Math.random() * 0.5 : 0.1 + Math.random() * 0.2,
        type,
        color: typeColors[Math.floor(Math.random() * typeColors.length)],
      };
    });
    setParticles(items);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.x}%`, top: '-5%' }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(p.id * 0.8) * 60, Math.cos(p.id * 0.5) * 30, 0],
            rotate: p.type === 'petal' ? [0, 360 + Math.random() * 360] : [0, 180],
          }}
          transition={{
            y: { duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' },
            x: { duration: p.duration * 0.5, repeat: Infinity, delay: p.delay, ease: 'easeInOut' },
            rotate: { duration: p.duration * 0.8, repeat: Infinity, delay: p.delay, ease: 'linear' },
          }}
        >
          {p.type === 'petal' ? (
            <div style={{
              width: p.size,
              height: p.size * 0.55,
              opacity: p.opacity,
              background: `linear-gradient(135deg, ${p.color} 0%, ${p.color}88 100%)`,
              borderRadius: '50% 0 50% 0',
              transform: `rotate(${p.id * 40}deg)`,
              filter: 'blur(0.3px)',
            }} />
          ) : p.type === 'firefly' ? (
            <motion.div
              animate={{
                opacity: [p.opacity * 0.2, p.opacity, p.opacity * 0.2],
                scale: [0.6, 1.4, 0.6],
              }}
              transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: p.size,
                height: p.size,
                background: p.color,
                borderRadius: '50%',
                boxShadow: `0 0 ${p.size * 2}px ${p.color}66, 0 0 ${p.size * 4}px ${p.color}22`,
              }}
            />
          ) : p.type === 'sparkle' ? (
            <motion.div
              animate={{ opacity: [0, p.opacity * 1.5, 0], scale: [0.5, 1.2, 0.5] }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
              style={{
                width: p.size * 0.8,
                height: p.size * 0.8,
                background: p.color,
                borderRadius: '50%',
                boxShadow: `0 0 6px ${p.color}44`,
              }}
            />
          ) : (
            <div style={{
              width: p.size * 0.4,
              height: p.size * 0.4,
              background: p.color,
              borderRadius: '50%',
              opacity: p.opacity * 0.3,
            }} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
