'use client';

import { motion } from 'framer-motion';
import { Palette, Sun, Music, Heart, PartyPopper, Calendar, Clock, MapPin } from 'lucide-react';
import { EVENTS } from '@/lib/config';

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  Music: <Music className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  PartyPopper: <PartyPopper className="w-5 h-5" />,
};

export default function EventSchedule() {
  return (
    <section className="relative section-padding overflow-hidden bg-ivory">
      {/* Rich layered background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse at 10% 20%, rgba(248,225,231,0.5) 0%, transparent 50%),
          radial-gradient(ellipse at 90% 80%, rgba(212,175,55,0.05) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 50%, rgba(168,181,160,0.06) 0%, transparent 50%)
        `
      }} />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 0.5px, transparent 0.5px)',
        backgroundSize: '32px 32px',
      }} />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20 md:mb-28 relative z-10"
      >
        <p className="font-accent text-[10px] md:text-xs text-maroon/30 tracking-[0.5em] uppercase mb-4">Celebrations</p>
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient">Wedding Events</h2>
        <div className="gold-line w-28 mx-auto mt-8" />
      </motion.div>

      {/* Events */}
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Gold connecting line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-[0.5px]"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.2) 10%, rgba(212,175,55,0.2) 90%, transparent)' }}
        />

        {EVENTS.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              className={`relative flex mb-14 md:mb-20 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
            >
              {/* Icon dot */}
              <div className="absolute left-6 md:left-1/2 z-10 -translate-x-[20px] md:-translate-x-[20px]">
                <motion.div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #FFF8F0, #FBE8ED)',
                    border: '2px solid rgba(212,175,55,0.25)',
                    boxShadow: '0 4px 16px rgba(212,175,55,0.12)',
                    color: '#D4AF37',
                  }}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {iconMap[event.icon] || <Heart className="w-4 h-4" />}
                </motion.div>
              </div>

              {/* Card */}
              <div className={`ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-14 md:w-[45%] md:text-right' : 'md:ml-auto md:pl-14 md:w-[45%]'} w-full`}>
                <motion.div
                  className="glass-card p-7 md:p-8 relative group cursor-default overflow-hidden"
                  whileHover={{ y: -5, boxShadow: '0 16px 50px rgba(212,175,55,0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Subtle top gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[20px]"
                    style={{ background: `linear-gradient(90deg, transparent, ${event.dressCode}44, transparent)` }}
                  />

                  <h3 className="font-display text-xl md:text-2xl text-maroon font-semibold mb-1">{event.name}</h3>
                  <p className="font-body text-sm text-maroon/40 italic mb-5">{event.description}</p>

                  {/* Details with proper icons */}
                  <div className={`space-y-2.5 ${isEven ? 'md:text-right' : ''}`}>
                    <div className={`flex items-center gap-2 font-body text-sm text-maroon/55 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <Calendar className="w-3.5 h-3.5 text-champagne/50 flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className={`flex items-center gap-2 font-body text-sm text-maroon/55 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <Clock className="w-3.5 h-3.5 text-champagne/50 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className={`flex items-center gap-2 font-body text-sm text-maroon/55 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <MapPin className="w-3.5 h-3.5 text-champagne/50 flex-shrink-0" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  {/* Dress code */}
                  <div className={`flex items-center gap-2.5 mt-5 ${isEven ? 'md:justify-end' : ''}`}>
                    <div className="w-4 h-4 rounded-full shadow-sm"
                      style={{ backgroundColor: event.dressCode, border: '2px solid rgba(255,255,255,0.3)', boxShadow: `0 2px 8px ${event.dressCode}33` }}
                    />
                    <span className="font-accent text-[9px] text-maroon/35 tracking-[0.15em] uppercase">{event.dressCodeName}</span>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r rounded-tr-[20px] pointer-events-none" style={{ borderColor: 'rgba(212,175,55,0.1)' }} />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l rounded-bl-[20px] pointer-events-none" style={{ borderColor: 'rgba(212,175,55,0.1)' }} />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
