'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '@/lib/config';

const GALLERY = IMAGES.gallery;
// Bento grid sizes for visual variety
const gridSpans = [
  'col-span-2 row-span-2',  // large
  'col-span-1 row-span-1',  // small
  'col-span-1 row-span-2',  // tall
  'col-span-1 row-span-1',  // small
  'col-span-2 row-span-1',  // wide
  'col-span-1 row-span-1',  // small
  'col-span-1 row-span-2',  // tall
  'col-span-1 row-span-1',  // small
];

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };
  const navigate = (dir: number) => {
    if (lightboxIndex === null) return;
    const next = lightboxIndex + dir;
    setLightboxIndex(next < 0 ? GALLERY.length - 1 : next >= GALLERY.length ? 0 : next);
  };

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
        <p className="font-accent text-[10px] md:text-xs text-maroon/30 tracking-[0.5em] uppercase mb-4">Captured Moments</p>
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient">Our Gallery</h2>
        <div className="gold-line w-28 mx-auto mt-8" />
      </motion.div>

      {/* Bento grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[200px] gap-2 sm:gap-3 md:gap-4">
        {GALLERY.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true, margin: '-40px' }}
            className={`${gridSpans[i] || 'col-span-1 row-span-1'} relative rounded-2xl overflow-hidden cursor-pointer group`}
            onClick={() => openLightbox(i)}
          >
            <Image
              src={src}
              alt={`Wedding photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,26,0.4) 100%)' }}
            />
            {/* Gold border on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ border: '2px solid rgba(212,175,55,0.3)', boxShadow: 'inset 0 0 30px rgba(212,175,55,0.08)' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center"
            style={{ background: 'rgba(10,10,26,0.95)', backdropFilter: 'blur(16px)' }}
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-50 transition-colors"
              style={{ background: 'rgba(255,248,240,0.08)' }}
            >
              <X className="w-5 h-5" style={{ color: '#FFF8F0' }} />
            </button>

            <button onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 w-10 h-10 rounded-full flex items-center justify-center z-50 transition-colors"
              style={{ background: 'rgba(255,248,240,0.08)' }}
            >
              <ChevronLeft className="w-5 h-5" style={{ color: '#FFF8F0' }} />
            </button>

            <button onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 w-10 h-10 rounded-full flex items-center justify-center z-50 transition-colors"
              style={{ background: 'rgba(255,248,240,0.08)' }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: '#FFF8F0' }} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-[88vw] h-[70vh] md:w-[75vw] md:h-[80vh] rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 20px 80px rgba(0,0,0,0.5)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY[lightboxIndex]}
                alt={`Photo ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                quality={90}
              />
            </motion.div>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-accent text-[10px] tracking-[0.3em]"
              style={{ color: 'rgba(212,175,55,0.4)' }}
            >
              {lightboxIndex + 1} / {GALLERY.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
