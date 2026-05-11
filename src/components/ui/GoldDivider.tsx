'use client';

import { motion } from 'framer-motion';

interface GoldDividerProps {
  className?: string;
  variant?: 'simple' | 'floral' | 'ornate';
  dark?: boolean;
}

export default function GoldDivider({ className = '', variant = 'simple', dark = false }: GoldDividerProps) {
  const bg = dark
    ? 'linear-gradient(180deg, #0A0A1A, #14142B, #0A0A1A)'
    : 'linear-gradient(180deg, #FFF8F0, #FDF5F7, #FFF8F0)';

  if (variant === 'floral') {
    return (
      <div style={{ background: bg }}>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`flex items-center justify-center gap-3 py-6 ${className}`}
        >
          <div className="gold-line flex-1 max-w-[100px]" />
          <svg viewBox="0 0 60 24" className="w-14 h-6 flex-shrink-0" style={{ color: 'rgba(212,175,55,0.25)' }}>
            <path d="M30,4 Q20,4 12,11 Q5,17 2,17" stroke="currentColor" fill="none" strokeWidth="0.8" />
            <path d="M30,4 Q40,4 48,11 Q55,17 58,17" stroke="currentColor" fill="none" strokeWidth="0.8" />
            <circle cx="30" cy="4" r="2.5" fill="currentColor" />
            <path d="M26,13 Q30,7 34,13" stroke="currentColor" fill="none" strokeWidth="0.6" />
            <circle cx="26" cy="14" r="1" fill="currentColor" opacity="0.4" />
            <circle cx="34" cy="14" r="1" fill="currentColor" opacity="0.4" />
          </svg>
          <div className="gold-line flex-1 max-w-[100px]" />
        </motion.div>
      </div>
    );
  }

  if (variant === 'ornate') {
    return (
      <div style={{ background: bg }}>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`flex items-center justify-center gap-3 py-6 ${className}`}
        >
          <div className="gold-line flex-1 max-w-[120px]" />
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(212,175,55,0.2)' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(212,175,55,0.3)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(212,175,55,0.4)' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(212,175,55,0.3)' }} />
            <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(212,175,55,0.2)' }} />
          </div>
          <div className="gold-line flex-1 max-w-[120px]" />
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ background: bg }}>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`py-4 ${className}`}
      >
        <div className="gold-line max-w-[200px] mx-auto" />
      </motion.div>
    </div>
  );
}
