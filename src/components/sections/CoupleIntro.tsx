'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { COUPLE } from '@/lib/config';

export default function CoupleIntro() {
  return (
    <section className="relative section-padding overflow-hidden bg-ivory">
      {/* Mesh gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(at 30% 20%, rgba(248,225,231,0.4) 0%, transparent 50%), radial-gradient(at 70% 80%, rgba(212,175,55,0.05) 0%, transparent 50%)'
      }} />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20 md:mb-28"
      >
        <p className="font-accent text-[10px] md:text-xs text-maroon/30 tracking-[0.5em] uppercase mb-4">About Us</p>
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient">The Happy Couple</h2>
        <div className="gold-line w-28 mx-auto mt-8" />
      </motion.div>

      {/* Split layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center relative">
        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center px-4"
        >
          <div className="relative group mb-10">
            {/* Rotating gold ring */}
            <motion.div
              className="absolute rounded-full"
              style={{ inset: '-12px', border: '2px solid rgba(212,175,55,0.25)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute top-0 left-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ background: '#D4AF37', boxShadow: '0 0 8px rgba(212,175,55,0.5)' }} />
            </motion.div>
            {/* Second ring counter-rotating */}
            <motion.div
              className="absolute rounded-full"
              style={{ inset: '-20px', border: '1px solid rgba(212,175,55,0.1)' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-champagne/30" />
            </motion.div>

            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-gold relative"
              style={{ border: '4px solid rgba(212,175,55,0.3)' }}
            >
              <Image
                src={COUPLE.groom.photo}
                alt={COUPLE.groom.firstName}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 208px, 256px"
              />
              {/* Golden vignette on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle, transparent 50%, rgba(212,175,55,0.15) 100%)' }}
              />
            </div>
          </div>

          <h3 className="font-display text-2xl md:text-3xl text-maroon font-semibold mb-1">
            {COUPLE.groom.firstName} {COUPLE.groom.lastName}
          </h3>
          <p className="font-accent text-[9px] md:text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: '#D4AF37' }}>
            The Groom
          </p>
          <p className="font-body text-base md:text-lg text-maroon/55 max-w-sm leading-relaxed">
            {COUPLE.groom.bio}
          </p>
        </motion.div>

        {/* Heart center */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div animate={{ scale: [1, 1.15, 1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-gold"
              style={{ background: 'linear-gradient(135deg, #FFF8F0, #FBE8ED)', border: '2px solid rgba(212,175,55,0.3)' }}>
              <Heart className="w-7 h-7 text-maroon fill-maroon/20" />
            </div>
          </motion.div>
          {/* Diagonal gold line behind */}
          <div className="absolute inset-0 -z-10" style={{
            width: '200%', height: '2px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)',
            top: '50%', left: '-50%', transform: 'rotate(-30deg)'
          }} />
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center px-4"
        >
          <div className="relative group mb-10">
            <motion.div
              className="absolute rounded-full"
              style={{ inset: '-12px', border: '2px solid rgba(212,175,55,0.25)' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute top-0 left-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ background: '#D4AF37', boxShadow: '0 0 8px rgba(212,175,55,0.5)' }} />
            </motion.div>
            <motion.div
              className="absolute rounded-full"
              style={{ inset: '-20px', border: '1px solid rgba(212,175,55,0.1)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-champagne/30" />
            </motion.div>

            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-gold relative"
              style={{ border: '4px solid rgba(212,175,55,0.3)' }}
            >
              <Image
                src={COUPLE.bride.photo}
                alt={COUPLE.bride.firstName}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 208px, 256px"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle, transparent 50%, rgba(212,175,55,0.15) 100%)' }}
              />
            </div>
          </div>

          <h3 className="font-display text-2xl md:text-3xl text-maroon font-semibold mb-1">
            {COUPLE.bride.firstName} {COUPLE.bride.lastName}
          </h3>
          <p className="font-accent text-[9px] md:text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: '#D4AF37' }}>
            The Bride
          </p>
          <p className="font-body text-base md:text-lg text-maroon/55 max-w-sm leading-relaxed">
            {COUPLE.bride.bio}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
