'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TIMELINE } from '@/lib/config';

export default function OurStory() {
  return (
    <section className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFF8F0 0%, #FDF5F7 50%, #FFF8F0 100%)' }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20 md:mb-28"
      >
        <p className="font-accent text-[10px] md:text-xs text-maroon/30 tracking-[0.5em] uppercase mb-4">Our Journey</p>
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient">Our Love Story</h2>
        <div className="gold-line w-28 mx-auto mt-8" />
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">
        {/* Gold connecting line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-[0.5px]"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.3) 10%, rgba(212,175,55,0.3) 90%, transparent)' }}
        />

        {TIMELINE.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              className={`relative flex items-start mb-20 md:mb-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-[7px] md:-translate-x-[7px] mt-4 z-10">
                <motion.div
                  className="w-3.5 h-3.5 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700, #D4AF37)',
                    boxShadow: '0 0 12px rgba(212,175,55,0.5), 0 0 4px rgba(212,175,55,0.8)',
                    border: '2px solid #FFF8F0',
                  }}
                  whileInView={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Card */}
              <div className={`ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-16 md:w-[45%]' : 'md:ml-auto md:pl-16 md:w-[45%]'} w-full`}>
                <motion.div
                  className="glass-card overflow-hidden group relative"
                  whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(212,175,55,0.12)' }}
                  transition={{ duration: 0.4 }}
                  style={{ transform: `rotate(${isEven ? -0.8 : 0.8}deg)` }}
                >
                  {/* Photo */}
                  <div className="relative w-full h-48 md:h-56 overflow-hidden">
                    <Image
                      src={item.photo}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0" style={{
                      background: 'linear-gradient(180deg, transparent 50%, rgba(255,248,240,0.9) 100%)'
                    }} />
                    {/* Handwritten style date */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full"
                      style={{ background: 'rgba(10,10,26,0.6)', backdropFilter: 'blur(8px)' }}>
                      <span className="font-accent text-[9px] tracking-[0.2em] uppercase" style={{ color: '#D4AF37' }}>
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="font-display text-xl md:text-2xl text-maroon font-semibold mb-2">{item.title}</h3>
                    <p className="font-body text-sm md:text-base text-maroon/55 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Gold accent corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-[20px] pointer-events-none" style={{ borderColor: 'rgba(212,175,55,0.15)' }} />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-[20px] pointer-events-none" style={{ borderColor: 'rgba(212,175,55,0.15)' }} />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
