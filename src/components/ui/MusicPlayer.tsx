'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/filhall_instrumental.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
    setShowPrompt(false);
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="glass-card-dark px-4 py-2 text-[10px] font-accent tracking-wider whitespace-nowrap"
            style={{ color: 'rgba(212,175,55,0.5)' }}
          >
            🎵 Play wedding music?
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={togglePlay}
        className="relative w-12 h-12 rounded-full flex items-center justify-center group"
        style={{
          background: 'rgba(10,10,26,0.7)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(212,175,55,0.2)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
        whileHover={{ scale: 1.1, boxShadow: '0 4px 25px rgba(212,175,55,0.2)' }}
        whileTap={{ scale: 0.9 }}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {/* Vinyl spin */}
        <motion.div
          className="absolute inset-1.5 rounded-full"
          style={{ border: '1px solid rgba(212,175,55,0.1)' }}
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={isPlaying ? { duration: 3, repeat: Infinity, ease: 'linear' } : { duration: 0 }}
        >
          <div className="absolute top-0 left-1/2 w-1 h-1 -translate-x-1/2 rounded-full" style={{ background: 'rgba(212,175,55,0.3)' }} />
        </motion.div>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 relative z-10" style={{ color: '#D4AF37' }} />
        ) : (
          <VolumeX className="w-4 h-4 relative z-10" style={{ color: 'rgba(255,248,240,0.4)' }} />
        )}

        {/* Pulse rings */}
        {isPlaying && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: '1px solid rgba(212,175,55,0.15)' }}
              animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: '1px solid rgba(212,175,55,0.08)' }}
              animate={{ scale: [1, 2], opacity: [0.2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            />
          </>
        )}
      </motion.button>
    </div>
  );
}
