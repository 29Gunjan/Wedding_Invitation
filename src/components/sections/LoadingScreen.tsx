'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COUPLE } from '@/lib/config';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'exit'>('loading');

  useEffect(() => {
    const duration = 3500;
    const interval = 30;
    const step = (interval / duration) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setPhase('exit');
          setTimeout(onComplete, 1200);
          return 100;
        }
        return Math.min(prev + step + Math.random() * 0.5, 100);
      });
    }, interval);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' || progress <= 100 ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #0A0A1A 0%, #14142B 50%, #0A0A1A 100%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Animated particles in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 2 + Math.random() * 3,
                  height: 2 + Math.random() * 3,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `rgba(212,175,55,${0.2 + Math.random() * 0.4})`,
                  boxShadow: `0 0 ${4 + Math.random() * 8}px rgba(212,175,55,0.3)`,
                }}
                animate={{
                  y: [0, -30 - Math.random() * 50, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* SVG Monogram with stroke draw animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative mb-16"
          >
            {/* Glow */}
            <div className="absolute inset-0 blur-[60px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)' , transform: 'scale(3)' }}
            />

            <motion.h1
              className="relative font-script text-8xl md:text-9xl lg:text-[10rem] select-none text-gold-gradient"
              animate={{ filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {COUPLE.monogram}
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="font-accent text-xs md:text-sm tracking-[0.5em] uppercase mb-20"
            style={{ color: 'rgba(212,175,55,0.5)' }}
          >
            Royal Wedding Invitation
          </motion.p>

          {/* Gold thread progress bar */}
          <div className="w-56 md:w-72 relative">
            {/* Track */}
            <div className="h-[1px] w-full rounded-full overflow-hidden" style={{ background: 'rgba(212,175,55,0.1)' }}>
              <motion.div
                className="h-full rounded-full relative"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #B8860B, #D4AF37, #FFD700, #D4AF37)',
                }}
              >
                {/* Glowing tip */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                  style={{ background: '#FFD700', boxShadow: '0 0 12px rgba(255,215,0,0.8), 0 0 24px rgba(212,175,55,0.4)' }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
