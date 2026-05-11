'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Navigation } from 'lucide-react';
import { WEDDING, IMAGES } from '@/lib/config';

export default function Venue() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden flex items-center">
      {/* Full-screen parallax background */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.venue}
          alt={WEDDING.venue.name}
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(10,10,26,0.6) 0%, rgba(10,10,26,0.3) 30%, rgba(10,10,26,0.5) 60%, rgba(10,10,26,0.8) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,26,0.4) 100%)'
        }} />
      </div>

      <div className="relative z-10 w-full section-padding">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-accent text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4" style={{ color: 'rgba(212,175,55,0.5)' }}>
            The Venue
          </p>
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient">Where We Celebrate</h2>
          <div className="gold-line w-28 mx-auto mt-8" />
        </motion.div>

        {/* Floating venue card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="glass-card-dark p-8 md:p-10 text-center relative">
            {/* Corner ornaments */}
            <div className="absolute top-3 left-3 w-10 h-10 border-t border-l rounded-tl-[20px]" style={{ borderColor: 'rgba(212,175,55,0.2)' }} />
            <div className="absolute top-3 right-3 w-10 h-10 border-t border-r rounded-tr-[20px]" style={{ borderColor: 'rgba(212,175,55,0.2)' }} />
            <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l rounded-bl-[20px]" style={{ borderColor: 'rgba(212,175,55,0.2)' }} />
            <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r rounded-br-[20px]" style={{ borderColor: 'rgba(212,175,55,0.2)' }} />

            {/* Location pin */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, type: 'spring', bounce: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
              >
                <MapPin className="w-6 h-6" style={{ color: '#D4AF37' }} />
              </div>
            </motion.div>

            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2" style={{ color: '#FFF8F0' }}>
              {WEDDING.venue.name}
            </h3>
            <p className="font-body text-sm mb-6" style={{ color: 'rgba(255,248,240,0.4)' }}>
              {WEDDING.venue.fullAddress}
            </p>

            {/* Get Directions button */}
            <motion.a
              href={WEDDING.venue.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-accent text-xs tracking-[0.2em] uppercase group relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #B8860B, #D4AF37, #B8860B)',
                color: '#0A0A1A',
                boxShadow: '0 4px 20px rgba(212,175,55,0.3)',
              }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(212,175,55,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              Get Directions
              {/* Shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  animation: 'shimmer 2s infinite',
                }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
