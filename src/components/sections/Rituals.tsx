'use client';

import { motion } from 'framer-motion';
import { RITUALS } from '@/lib/config';

/* Elegant hand-drawn style SVG icons for each ritual */
function RitualIcon({ name }: { name: string }) {
  const iconStyle = { stroke: '#D4AF37', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (name) {
    case 'Mehndi':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M24 6c0 8-6 12-6 20s6 16 6 16 6-8 6-16-6-12-6-20z" {...iconStyle} />
          <path d="M18 30c-2-2-4-1-6 0" {...iconStyle} />
          <path d="M30 30c2-2 4-1 6 0" {...iconStyle} />
          <circle cx="24" cy="18" r="2" stroke="#D4AF37" fill="rgba(212,175,55,0.15)" strokeWidth={1} />
          <path d="M21 24c0 0 3-2 6 0" {...iconStyle} strokeWidth={1} />
        </svg>
      );
    case 'Haldi':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <circle cx="24" cy="24" r="10" stroke="#D4AF37" fill="rgba(212,175,55,0.08)" strokeWidth={1.5} />
          <path d="M24 8v4M24 36v4M8 24h4M36 24h4" {...iconStyle} />
          <path d="M13 13l3 3M32 32l3 3M13 35l3-3M32 16l3-3" {...iconStyle} strokeWidth={1} />
          <circle cx="24" cy="24" r="4" stroke="#D4AF37" fill="rgba(212,175,55,0.15)" strokeWidth={1} />
        </svg>
      );
    case 'Sangeet':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M18 38V14l18-6v24" {...iconStyle} />
          <circle cx="14" cy="38" r="4" stroke="#D4AF37" fill="rgba(212,175,55,0.1)" strokeWidth={1.5} />
          <circle cx="32" cy="32" r="4" stroke="#D4AF37" fill="rgba(212,175,55,0.1)" strokeWidth={1.5} />
          <path d="M36 10c2 1 3 3 2 5" {...iconStyle} strokeWidth={1} />
          <path d="M38 8c3 2 4 5 3 8" {...iconStyle} strokeWidth={1} />
        </svg>
      );
    case 'Pheras':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M24 10c-8 0-14 6-14 14s14 18 14 18 14-10 14-18-6-14-14-14z" {...iconStyle} fill="rgba(212,175,55,0.06)" />
          <path d="M20 22c0 0 2 4 4 4s4-4 4-4" {...iconStyle} strokeWidth={1} />
          <circle cx="24" cy="28" r="3" stroke="#D4AF37" fill="rgba(212,175,55,0.12)" strokeWidth={1} />
          <path d="M18 18l2 1M28 18l2 1" {...iconStyle} strokeWidth={1} />
        </svg>
      );
    case 'Vidaai':
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M12 36c4-8 8-12 12-12s8 4 12 12" {...iconStyle} />
          <path d="M24 24c0-6-3-10-3-16" {...iconStyle} strokeWidth={1} />
          <path d="M24 24c0-6 3-10 3-16" {...iconStyle} strokeWidth={1} />
          <circle cx="24" cy="6" r="2" stroke="#D4AF37" fill="rgba(212,175,55,0.15)" strokeWidth={1} />
          <path d="M16 32l-2-3M32 32l2-3" {...iconStyle} strokeWidth={1} />
          <path d="M10 38h28" {...iconStyle} strokeWidth={1} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <circle cx="24" cy="24" r="12" {...iconStyle} fill="rgba(212,175,55,0.06)" />
        </svg>
      );
  }
}

export default function Rituals() {
  return (
    <section className="relative section-padding overflow-hidden bg-ivory">
      {/* Rich mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse at 15% 25%, rgba(248,225,231,0.5) 0%, transparent 50%),
          radial-gradient(ellipse at 85% 75%, rgba(212,175,55,0.06) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 50%, rgba(168,181,160,0.08) 0%, transparent 60%)
        `
      }} />

      {/* Decorative mandala behind section */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[90vw] max-w-[800px] aspect-square rounded-full opacity-[0.025]"
          style={{ border: '1px solid #D4AF37' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-12"
      >
        <p className="font-accent text-[10px] md:text-xs text-maroon/30 tracking-[0.5em] uppercase mb-4">For Our Guests</p>
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient">Rituals &amp; Traditions</h2>
        <div className="gold-line w-28 mx-auto mt-8" />
        <p className="font-body text-sm md:text-base text-maroon/40 mt-6 max-w-lg mx-auto leading-relaxed">
          A guide to the beautiful Indian wedding ceremonies you&apos;ll witness during our celebration.
        </p>
      </motion.div>

      {/* Rituals grid */}
      <div className="max-w-6xl mx-auto mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {RITUALS.map((ritual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="glass-card p-7 text-center h-full relative group overflow-hidden"
                whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(212,175,55,0.12)' }}
                transition={{ duration: 0.4 }}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 30%, rgba(212,175,55,0.06) 0%, transparent 60%)' }}
                />

                {/* SVG Icon */}
                <motion.div
                  className="flex justify-center mb-5"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.06), rgba(248,225,231,0.3))',
                      border: '1px solid rgba(212,175,55,0.12)',
                    }}
                  >
                    <RitualIcon name={ritual.name} />
                  </div>
                </motion.div>

                <h3 className="font-display text-lg md:text-xl text-maroon font-semibold mb-3">{ritual.name}</h3>
                <p className="font-body text-xs md:text-sm text-maroon/45 leading-relaxed">{ritual.description}</p>

                {/* Gold accent line at bottom */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
                  style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '60%' }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
