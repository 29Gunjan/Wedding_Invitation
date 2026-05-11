'use client';

import { motion } from 'framer-motion';
import { EVENTS } from '@/lib/config';
import { Gift, Sparkles } from 'lucide-react';

export default function DressCode() {
  return (
    <section className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A1A 0%, #0F0F23 30%, #14142B 50%, #0F0F23 70%, #0A0A1A 100%)' }}
    >
      {/* Rich background with multiple radial gradients */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse at 20% 30%, rgba(212,175,55,0.04) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(123,30,58,0.04) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(248,225,231,0.02) 0%, transparent 40%)
        `
      }} />

      {/* Rotating decorative ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[70vw] max-w-[600px] aspect-square rounded-full"
          style={{ border: '1px solid rgba(212,175,55,0.03)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-20 relative z-10"
      >
        <p className="font-accent text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4" style={{ color: 'rgba(212,175,55,0.4)' }}>
          Attire Guide
        </p>
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient">Dress Code</h2>
        <div className="gold-line w-28 mx-auto mt-8" />
        <p className="font-body text-sm mt-6 max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(255,248,240,0.3)' }}>
          Each ceremony has a suggested palette to create a stunning visual harmony.
        </p>
      </motion.div>

      {/* Dress code cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-20 relative z-10">
        {EVENTS.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="glass-card-dark p-6 text-center relative group overflow-hidden h-full"
              whileHover={{ y: -6, borderColor: 'rgba(212,175,55,0.25)' }}
              transition={{ duration: 0.4 }}
            >
              {/* Color swatch with glow */}
              <div className="flex justify-center mb-5">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full relative"
                    style={{
                      backgroundColor: event.dressCode,
                      border: '3px solid rgba(255,248,240,0.1)',
                      boxShadow: `0 4px 24px ${event.dressCode}44, inset 0 2px 4px rgba(255,255,255,0.1)`,
                    }}
                  >
                    {/* Inner shine */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-1/4 right-1/4 h-1/3 rounded-b-full"
                        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.2), transparent)' }}
                      />
                    </div>
                  </div>
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 -m-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ border: `1px solid ${event.dressCode}55` }}
                  />
                </motion.div>
              </div>

              {/* Event name */}
              <h3 className="font-display text-sm md:text-base font-semibold mb-1" style={{ color: 'rgba(255,248,240,0.85)' }}>
                {event.name.replace(' Ceremony', '').replace(' Night', '')}
              </h3>

              {/* Color name */}
              <p className="font-accent text-[8px] md:text-[9px] tracking-[0.2em] uppercase" style={{ color: event.dressCode }}>
                {event.dressCodeName}
              </p>

              {/* Date */}
              <p className="font-body text-[10px] mt-2" style={{ color: 'rgba(255,248,240,0.2)' }}>
                {event.date.split(' ').slice(0, 2).join(' ')}
              </p>

              {/* Bottom accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${event.dressCode}88, transparent)` }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Gifts section - premium card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto relative z-10"
      >
        <div className="relative p-10 md:p-12 text-center rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(20,20,43,0.8), rgba(10,10,26,0.9))',
            border: '1px solid rgba(212,175,55,0.1)',
            boxShadow: '0 16px 60px rgba(0,0,0,0.3)',
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px',
          }} />

          {/* Corner ornaments */}
          <div className="absolute top-4 left-4 w-10 h-10 border-t border-l rounded-tl-xl" style={{ borderColor: 'rgba(212,175,55,0.15)' }} />
          <div className="absolute top-4 right-4 w-10 h-10 border-t border-r rounded-tr-xl" style={{ borderColor: 'rgba(212,175,55,0.15)' }} />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l rounded-bl-xl" style={{ borderColor: 'rgba(212,175,55,0.15)' }} />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r rounded-br-xl" style={{ borderColor: 'rgba(212,175,55,0.15)' }} />

          {/* Icon */}
          <motion.div
            className="flex justify-center mb-6"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.12)' }}
            >
              <Gift className="w-6 h-6" style={{ color: 'rgba(212,175,55,0.5)' }} />
            </div>
          </motion.div>

          <h3 className="font-display text-2xl md:text-3xl font-medium mb-3 relative z-10" style={{ color: 'rgba(255,248,240,0.9)' }}>
            Your Presence is Our Present
          </h3>

          <div className="gold-line w-16 mx-auto my-5" />

          <p className="font-body text-sm md:text-base leading-relaxed relative z-10" style={{ color: 'rgba(255,248,240,0.35)' }}>
            Your love and blessings are the greatest gifts we could ever receive.
            We humbly request no boxed gifts — just your warm presence, heartfelt wishes, 
            and the joy of celebrating together.
          </p>

          {/* Sparkle accent */}
          <motion.div
            className="absolute top-6 right-8"
            animate={{ opacity: [0.2, 0.6, 0.2], rotate: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" style={{ color: 'rgba(212,175,55,0.2)' }} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
