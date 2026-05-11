'use client';

import { motion } from 'framer-motion';
import { INVITATION_QUOTE, SANSKRIT_SHLOK } from '@/lib/config';

export default function InvitationQuote() {
  const words = INVITATION_QUOTE.split(' ');

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A1A 0%, #14142B 50%, #0A0A1A 100%)' }}
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 opacity-40" style={{
        background: 'radial-gradient(at 20% 30%, rgba(212,175,55,0.06) 0%, transparent 50%), radial-gradient(at 80% 70%, rgba(123,30,58,0.06) 0%, transparent 50%)'
      }} />

      {/* Rotating mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.svg
          viewBox="0 0 500 500"
          className="w-[70vw] max-w-[600px] h-auto"
          style={{ opacity: 0.04 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        >
          <circle cx="250" cy="250" r="240" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="220" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
          <circle cx="250" cy="250" r="200" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            const x = 250 + 210 * Math.cos(angle);
            const y = 250 + 210 * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r="6" fill="none" stroke="#D4AF37" strokeWidth="0.4" />;
          })}
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse key={`p-${i}`} cx="250" cy="160" rx="12" ry="50" fill="none" stroke="#D4AF37" strokeWidth="0.4"
              transform={`rotate(${i * 30} 250 250)`} />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse key={`q-${i}`} cx="250" cy="130" rx="8" ry="30" fill="none" stroke="#D4AF37" strokeWidth="0.3"
              transform={`rotate(${i * 45 + 22.5} 250 250)`} />
          ))}
        </motion.svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Glassmorphism card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass-card-dark p-10 md:p-16 text-center relative"
        >
          {/* Gold corner ornaments */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t border-l rounded-tl-xl" style={{ borderColor: 'rgba(212,175,55,0.2)' }} />
          <div className="absolute top-4 right-4 w-12 h-12 border-t border-r rounded-tr-xl" style={{ borderColor: 'rgba(212,175,55,0.2)' }} />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l rounded-bl-xl" style={{ borderColor: 'rgba(212,175,55,0.2)' }} />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r rounded-br-xl" style={{ borderColor: 'rgba(212,175,55,0.2)' }} />

          {/* Sanskrit shlok */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-body text-sm md:text-base leading-relaxed mb-6"
            style={{ color: 'rgba(212,175,55,0.35)' }}
          >
            {SANSKRIT_SHLOK.sanskrit}
          </motion.p>

          <div className="gold-line w-16 mx-auto mb-6" />

          {/* Opening quote mark */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="block font-script text-6xl md:text-7xl mb-4"
            style={{ color: 'rgba(212,175,55,0.2)' }}
          >
            &ldquo;
          </motion.span>

          {/* Quote text - word by word */}
          <p className="font-body text-xl sm:text-2xl md:text-3xl leading-relaxed md:leading-relaxed text-balance"
            style={{ color: 'rgba(255,248,240,0.75)' }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.04, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
              >
                {word}
              </motion.span>
            ))}
          </p>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="block font-script text-6xl md:text-7xl mt-4"
            style={{ color: 'rgba(212,175,55,0.2)' }}
          >
            &rdquo;
          </motion.span>

          <div className="gold-line w-16 mx-auto mt-6 mb-4" />

          {/* Translation */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            className="font-display text-xs md:text-sm italic"
            style={{ color: 'rgba(255,248,240,0.3)' }}
          >
            {SANSKRIT_SHLOK.translation}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
