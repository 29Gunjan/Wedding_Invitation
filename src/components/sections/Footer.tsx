'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, MessageCircle, Instagram, Share2 } from 'lucide-react';
import { COUPLE, SOCIAL, IMAGES } from '@/lib/config';

export default function Footer() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <Image src={IMAGES.decor} alt="Decoration" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(10,10,26,0.92) 0%, rgba(10,10,26,0.85) 50%, rgba(10,10,26,0.95) 100%)'
        }} />
      </div>

      <div className="relative z-10 section-padding text-center max-w-2xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-accent text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4" style={{ color: 'rgba(212,175,55,0.4)' }}>
            See You There
          </p>
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient mb-8">
            We Can&apos;t Wait to Celebrate With You
          </h2>

          <div className="gold-line w-24 mx-auto my-10" />

          {/* Monogram */}
          <motion.div className="inline-block mb-8 cursor-pointer group" whileHover={{ scale: 1.05 }}>
            <span className="font-script text-6xl md:text-7xl text-gold-gradient">{COUPLE.monogram}</span>
          </motion.div>

          {/* Hashtag */}
          <p className="font-accent text-sm md:text-base tracking-[0.3em] mb-12" style={{ color: 'rgba(212,175,55,0.5)' }}>
            {COUPLE.hashtag}
          </p>

          {/* Share buttons */}
          <div className="flex items-center justify-center gap-5">
            {[
              { icon: <MessageCircle className="w-5 h-5" />, href: SOCIAL.whatsapp, label: 'WhatsApp' },
              { icon: <Instagram className="w-5 h-5" />, href: SOCIAL.instagram, label: 'Instagram' },
              { icon: <Share2 className="w-5 h-5" />, href: '#', label: 'Share', isShare: true },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.isShare ? undefined : '_blank'}
                rel="noopener noreferrer"
                onClick={item.isShare ? (e) => {
                  e.preventDefault();
                  navigator.share?.({ title: `${COUPLE.groom.firstName} & ${COUPLE.bride.firstName} Wedding`, url: window.location.href });
                } : undefined}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group/btn"
                style={{
                  border: '1px solid rgba(212,175,55,0.2)',
                  color: 'rgba(255,248,240,0.5)',
                }}
                whileHover={{
                  scale: 1.1,
                  borderColor: 'rgba(212,175,55,0.5)',
                  color: '#D4AF37',
                  boxShadow: '0 4px 20px rgba(212,175,55,0.2)',
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={item.label}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 pt-8"
          style={{ borderTop: '1px solid rgba(212,175,55,0.06)' }}
        >
          <p className="font-body text-[10px] tracking-[0.3em] flex items-center justify-center gap-1.5"
            style={{ color: 'rgba(255,248,240,0.15)' }}
          >
            Made with <Heart className="w-3 h-3 inline" style={{ color: 'rgba(212,175,55,0.3)' }} /> for a lifetime of love
          </p>
        </motion.div>
      </div>
    </section>
  );
}
