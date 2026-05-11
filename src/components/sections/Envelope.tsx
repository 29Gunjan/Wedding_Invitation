'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COUPLE } from '@/lib/config';

export default function Envelope({ onOpen }: { onOpen: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(onOpen, 2200);
  };

  return (
    <AnimatePresence>
      {!isOpen ? (
        <motion.section
          className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #0A0A1A 0%, #14142B 40%, #1A1A2E 100%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {/* Firefly particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 2 + Math.random() * 4,
                  height: 2 + Math.random() * 4,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 3 === 0
                    ? `rgba(248,225,231,${0.3 + Math.random() * 0.4})`
                    : `rgba(212,175,55,${0.2 + Math.random() * 0.5})`,
                  boxShadow: i % 3 === 0
                    ? `0 0 8px rgba(248,225,231,0.4)`
                    : `0 0 8px rgba(212,175,55,0.4)`,
                }}
                animate={{
                  y: [0, -20 - Math.random() * 40, 0],
                  x: [0, Math.random() * 30 - 15, 0],
                  opacity: [0.1, 0.7, 0.1],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: 'easeInOut',
                }}
              />
            ))}

            {/* Rose petal particles */}
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`petal-${i}`}
                className="absolute text-lg md:text-xl opacity-40"
                initial={{ x: `${Math.random() * 100}vw`, y: '-5vh', rotate: 0 }}
                animate={{ y: '110vh', rotate: 360 + Math.random() * 360, x: `${Math.random() * 100}vw` }}
                transition={{ duration: 10 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 6, ease: 'linear' }}
              >
                🌸
              </motion.div>
            ))}
          </div>

          {/* Envelope */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.7, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative cursor-pointer group"
            onClick={handleOpen}
          >
            <div className="relative w-[280px] h-[195px] sm:w-[320px] sm:h-[220px] md:w-[460px] md:h-[320px] perspective-1000">
              {/* Envelope shadow */}
              <div className="absolute inset-0 rounded-xl blur-2xl opacity-30" style={{ background: 'rgba(212,175,55,0.2)', transform: 'translateY(20px) scale(0.9)' }} />

              {/* Envelope back */}
              <div className="absolute inset-0 rounded-xl envelope-body" />

              {/* Inner card peek */}
              <div className="absolute inset-x-5 top-5 bottom-5 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #FFFDF8 0%, #FFF8F0 50%, #FBE8ED 100%)' }}
              >
                <div className="text-center">
                  <span className="font-script text-3xl md:text-5xl text-gold-gradient opacity-60">{COUPLE.monogram}</span>
                  <div className="mt-2 mx-auto gold-line" style={{ width: '60px' }} />
                </div>
              </div>

              {/* Bottom flap */}
              <div className="absolute bottom-0 left-0 right-0 h-[48%] rounded-b-xl z-10"
                style={{
                  clipPath: 'polygon(0 35%, 50% 0%, 100% 35%, 100% 100%, 0 100%)',
                  background: 'linear-gradient(180deg, #D4BC9A 0%, #C4A87C 100%)',
                  boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
                }}
              />

              {/* Top flap */}
              <div className="absolute top-0 left-0 right-0 h-[55%] z-20"
                style={{ transformOrigin: 'top center' }}
              >
                <div className="w-full h-full rounded-t-xl"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    background: 'linear-gradient(180deg, #C4A87C 0%, #D4BC9A 50%, #DCC8A9 100%)',
                  }}
                />
              </div>

              {/* Wax seal - enhanced */}
              <motion.div
                className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 z-30 w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full wax-seal flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-accent text-ivory/90 text-sm md:text-base tracking-widest font-semibold">
                  {COUPLE.initials}
                </span>
                {/* Seal rings */}
                <div className="absolute inset-1 rounded-full border border-ivory/10" />
                <div className="absolute inset-2 rounded-full border border-ivory/5" />
                {/* Seal drips */}
                <div className="absolute -bottom-1 left-[30%] w-3 h-4 rounded-b-full" style={{ background: 'radial-gradient(circle at 50% 0%, #7B1E3A, #5E1529)' }} />
                <div className="absolute -bottom-0.5 right-[25%] w-2 h-3 rounded-b-full" style={{ background: 'radial-gradient(circle at 50% 0%, #7B1E3A, #5E1529)' }} />
              </motion.div>
            </div>

            {/* Click prompt */}
            <motion.div
              className="text-center mt-10"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <p className="font-accent text-[10px] md:text-xs tracking-[0.4em] uppercase" style={{ color: 'rgba(212,175,55,0.5)' }}>
                Tap to open your invitation
              </p>
            </motion.div>

            {/* Hover glow */}
            <div className="absolute inset-0 -m-8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 60%)' }}
            />
          </motion.div>
        </motion.section>
      ) : (
        <motion.section
          className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #0A0A1A 0%, #14142B 40%, #1A1A2E 100%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Confetti petals on open */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-sm"
              initial={{ x: '50%', y: '50%', scale: 0, opacity: 1 }}
              animate={{
                x: `${50 + (Math.random() - 0.5) * 80}%`,
                y: `${50 + (Math.random() - 0.5) * 80}%`,
                scale: [0, 1, 0.5],
                opacity: [1, 0.8, 0],
                rotate: Math.random() * 720,
              }}
              transition={{ duration: 2 + Math.random(), delay: 0.5 + Math.random() * 0.5, ease: 'easeOut' }}
            >
              {['🌸', '✨', '🌹', '💛', '🪷'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}

          <div className="relative w-[280px] h-[195px] sm:w-[320px] sm:h-[220px] md:w-[460px] md:h-[320px] perspective-1000">
            <div className="absolute inset-0 rounded-xl envelope-body" />

            {/* Card sliding out */}
            <motion.div
              className="absolute inset-x-5 top-5 bottom-5 rounded-lg flex flex-col items-center justify-center z-10 shadow-xl"
              style={{ background: 'linear-gradient(135deg, #FFFDF8, #FFF8F0, #FBE8ED)' }}
              initial={{ y: 0 }}
              animate={{ y: -200, scale: 1.05 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="font-script text-4xl md:text-6xl text-gold-gradient">{COUPLE.monogram}</span>
              <div className="gold-line w-20 mt-3" />
              <p className="font-accent text-[9px] md:text-[10px] tracking-[0.3em] uppercase mt-3" style={{ color: '#7B1E3A' }}>
                You are cordially invited
              </p>
            </motion.div>

            {/* Bottom flap */}
            <div className="absolute bottom-0 left-0 right-0 h-[48%] rounded-b-xl z-20"
              style={{
                clipPath: 'polygon(0 35%, 50% 0%, 100% 35%, 100% 100%, 0 100%)',
                background: 'linear-gradient(180deg, #D4BC9A 0%, #C4A87C 100%)',
              }}
            />

            {/* Top flap opening */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[55%] z-30 preserve-3d"
              style={{ transformOrigin: 'top center' }}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: 180 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="w-full h-full rounded-t-xl backface-hidden"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  background: 'linear-gradient(180deg, #C4A87C 0%, #D4BC9A 50%, #DCC8A9 100%)',
                }}
              />
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
