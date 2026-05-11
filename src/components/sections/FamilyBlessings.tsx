'use client';

import { motion } from 'framer-motion';
import { FAMILY, COUPLE } from '@/lib/config';

function FamilyColumn({ title, family, side, delay }: {
  title: string; family: { father: string; mother: string; siblings: string[] }; side: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="font-accent text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: 'rgba(212,175,55,0.5)' }}>{side}</p>
      <h3 className="font-script text-3xl md:text-4xl text-gold-gradient mb-8">{title}</h3>
      <div className="space-y-4">
        <div>
          <p className="font-accent text-base md:text-lg tracking-wider" style={{ color: 'rgba(255,248,240,0.85)' }}>{family.father}</p>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(212,175,55,0.3)' }}>Father</p>
        </div>
        <div>
          <p className="font-accent text-base md:text-lg tracking-wider" style={{ color: 'rgba(255,248,240,0.85)' }}>{family.mother}</p>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(212,175,55,0.3)' }}>Mother</p>
        </div>
        {family.siblings.length > 0 && (
          <div className="pt-3">
            {family.siblings.map((s, i) => (
              <p key={i} className="font-body text-sm" style={{ color: 'rgba(255,248,240,0.5)' }}>{s}</p>
            ))}
            <p className="font-body text-[10px] tracking-[0.3em] uppercase mt-1" style={{ color: 'rgba(212,175,55,0.2)' }}>
              {family.siblings.length > 1 ? 'Siblings' : 'Sibling'}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function FamilyBlessings() {
  return (
    <section className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A1A 0%, #14142B 50%, #0A0A1A 100%)' }}
    >
      {/* Soft golden backlight */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.04) 0%, transparent 60%)'
      }} />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="font-accent text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4" style={{ color: 'rgba(212,175,55,0.4)' }}>
          With the Blessings of
        </p>
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient">Our Families</h2>
        <div className="gold-line w-28 mx-auto mt-8" />
      </motion.div>

      {/* Family columns */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10">
        <FamilyColumn title={`${COUPLE.groom.lastName} Family`} family={FAMILY.groom} side="Groom&apos;s Side" delay={0} />
        <FamilyColumn title={`${COUPLE.bride.lastName} Family`} family={FAMILY.bride} side="Bride&apos;s Side" delay={0.2} />
      </div>

      {/* Floral divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4 mt-16"
      >
        <div className="gold-line flex-1 max-w-[80px]" />
        <svg viewBox="0 0 50 20" className="w-12 h-5" style={{ color: 'rgba(212,175,55,0.2)' }}>
          <path d="M25,3 Q18,3 12,9 Q6,15 2,15" stroke="currentColor" fill="none" strokeWidth="1" />
          <path d="M25,3 Q32,3 38,9 Q44,15 48,15" stroke="currentColor" fill="none" strokeWidth="1" />
          <circle cx="25" cy="3" r="2" fill="currentColor" />
        </svg>
        <div className="gold-line flex-1 max-w-[80px]" />
      </motion.div>

      {/* Blessing quote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center font-display text-lg md:text-xl italic mt-10 max-w-lg mx-auto"
        style={{ color: 'rgba(255,248,240,0.2)' }}
      >
        &ldquo;Two families becoming one, united in love and joy.&rdquo;
      </motion.p>
    </section>
  );
}
