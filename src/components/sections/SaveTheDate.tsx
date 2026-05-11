'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEDDING } from '@/lib/config';
import { getTimeRemaining, padNumber } from '@/lib/utils';

function FlipDigit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center mx-1 sm:mx-1.5 md:mx-4">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="perspective-1000"
        >
          <div className="w-14 h-18 sm:w-16 sm:h-20 md:w-24 md:h-32 lg:w-28 lg:h-36 rounded-xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(20,20,43,0.9) 0%, rgba(10,10,26,0.95) 100%)',
              border: '1px solid rgba(212,175,55,0.15)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)',
            }}
          >
            <div className="absolute inset-x-0 top-0 h-1/2" style={{ background: 'rgba(255,255,255,0.02)' }} />
            <div className="absolute inset-x-0 top-1/2 h-[1px]" style={{ background: 'rgba(212,175,55,0.08)' }} />
            <span className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gold-gradient relative z-10">{value}</span>
          </div>
        </motion.div>
      </AnimatePresence>
      <p className="font-accent text-[8px] md:text-[10px] tracking-[0.3em] uppercase mt-3" style={{ color: 'rgba(212,175,55,0.4)' }}>
        {label}
      </p>
    </div>
  );
}

export default function SaveTheDate() {
  const [time, setTime] = useState(getTimeRemaining(WEDDING.date));

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeRemaining(WEDDING.date)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A1A 0%, #14142B 50%, #0A0A1A 100%)' }}
    >
      {/* Rotating mandala background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[80vw] max-w-[700px] aspect-square rounded-full"
          style={{ border: '1px solid rgba(212,175,55,0.04)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[60vw] max-w-[500px] aspect-square rounded-full"
          style={{ border: '1px solid rgba(212,175,55,0.06)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24 relative z-10"
      >
        <p className="font-accent text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4" style={{ color: 'rgba(212,175,55,0.4)' }}>
          Mark Your Calendar
        </p>
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient">Save the Date</h2>
        <div className="gold-line w-28 mx-auto mt-8" />
      </motion.div>

      {/* Date display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <p className="font-display text-2xl md:text-4xl font-light" style={{ color: 'rgba(255,248,240,0.5)' }}>{WEDDING.day}</p>
        <p className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mt-2" style={{ color: 'rgba(255,248,240,0.9)' }}>
          {WEDDING.displayDate.split(' ')[0]}
        </p>
        <p className="font-accent text-base md:text-xl tracking-[0.3em] uppercase mt-2" style={{ color: 'rgba(212,175,55,0.5)' }}>
          {WEDDING.displayDate.split(' ').slice(1).join(' ')}
        </p>
      </motion.div>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center relative z-10"
      >
        <div className="relative p-8 md:p-12 rounded-2xl">
          {/* Pulsing glow border */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{ border: '1px solid rgba(212,175,55,0.1)' }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(212,175,55,0.05), inset 0 0 20px rgba(212,175,55,0.02)',
                '0 0 50px rgba(212,175,55,0.12), inset 0 0 30px rgba(212,175,55,0.04)',
                '0 0 20px rgba(212,175,55,0.05), inset 0 0 20px rgba(212,175,55,0.02)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="flex items-center relative z-10">
            <FlipDigit value={padNumber(time.days)} label="Days" />
            <span className="font-display text-xl sm:text-2xl md:text-4xl mx-0.5 sm:mx-1" style={{ color: 'rgba(212,175,55,0.25)' }}>:</span>
            <FlipDigit value={padNumber(time.hours)} label="Hours" />
            <span className="font-display text-xl sm:text-2xl md:text-4xl mx-0.5 sm:mx-1" style={{ color: 'rgba(212,175,55,0.25)' }}>:</span>
            <FlipDigit value={padNumber(time.minutes)} label="Minutes" />
            <span className="font-display text-xl sm:text-2xl md:text-4xl mx-0.5 sm:mx-1" style={{ color: 'rgba(212,175,55,0.25)' }}>:</span>
            <FlipDigit value={padNumber(time.seconds)} label="Seconds" />
          </div>
        </div>
      </motion.div>

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center font-display text-lg md:text-xl italic mt-12 relative z-10"
        style={{ color: 'rgba(255,248,240,0.25)' }}
      >
        Until we say &ldquo;I do&rdquo;
      </motion.p>
    </section>
  );
}
