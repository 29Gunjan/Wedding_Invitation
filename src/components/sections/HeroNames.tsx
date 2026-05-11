'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { COUPLE, WEDDING, IMAGES } from '@/lib/config';

function AnimatedLetter({ letter, index }: { letter: string; index: number }) {
  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, y: 50, rotateX: -90, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay: 0.5 + index * 0.06, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  );
}

export default function HeroNames() {
  const groomName = COUPLE.groom.firstName;
  const brideName = COUPLE.bride.firstName;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Wedding background"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Multi-layer overlay for cinematic feel */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(10,10,26,0.7) 0%, rgba(10,10,26,0.4) 40%, rgba(10,10,26,0.6) 70%, rgba(10,10,26,0.85) 100%)'
        }} />
        {/* Vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,26,0.5) 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-accent text-xs md:text-sm tracking-[0.5em] uppercase mb-8"
          style={{ color: 'rgba(212,175,55,0.6)' }}
        >
          The Wedding Celebration of
        </motion.p>

        {/* Groom Name */}
        <div className="perspective-1000 mb-1">
          <h1 className="font-script text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-gold-gradient leading-none">
            {groomName.split('').map((letter, i) => (
              <AnimatedLetter key={`g-${i}`} letter={letter} index={i} />
            ))}
          </h1>
        </div>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="my-2 md:my-4"
        >
          <span className="font-script text-4xl md:text-6xl" style={{ color: 'rgba(212,175,55,0.4)' }}>&amp;</span>
        </motion.div>

        {/* Bride Name */}
        <div className="perspective-1000 mb-10">
          <h1 className="font-script text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-gold-gradient leading-none">
            {brideName.split('').map((letter, i) => (
              <AnimatedLetter key={`b-${i}`} letter={letter} index={i + groomName.length + 2} />
            ))}
          </h1>
        </div>

        {/* Gold underline */}
        <motion.div
          className="mx-auto overflow-hidden"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '200px', opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <div className="gold-line h-[2px]" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true }}
          className="font-display text-lg md:text-2xl italic mt-6"
          style={{ color: 'rgba(255,248,240,0.6)' }}
        >
          are getting married
        </motion.p>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          viewport={{ once: true }}
          className="font-accent text-sm md:text-base tracking-[0.4em] uppercase mt-4"
          style={{ color: 'rgba(212,175,55,0.5)' }}
        >
          {WEDDING.displayDate}
        </motion.p>

        {/* Venue */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          viewport={{ once: true }}
          className="font-body text-sm md:text-base mt-2"
          style={{ color: 'rgba(255,248,240,0.3)' }}
        >
          {WEDDING.venue.name} · {WEDDING.venue.city}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        viewport={{ once: true }}
      >
        <p className="font-accent text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: 'rgba(212,175,55,0.35)' }}>
          Scroll to begin
        </p>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" style={{ color: 'rgba(212,175,55,0.4)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
