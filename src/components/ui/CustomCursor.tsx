'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    setVisible(true);

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!(t.closest('a') || t.closest('button') || t.closest('[role="button"]') || t.closest('.cursor-pointer')));
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: pos.x - (hovering ? 16 : 5),
          y: pos.y - (hovering ? 16 : 5),
          width: hovering ? 32 : 10,
          height: hovering ? 32 : 10,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 30, mass: 0.4 }}
      >
        <div className="w-full h-full rounded-full transition-all duration-200"
          style={{
            background: hovering ? 'rgba(212,175,55,0.15)' : 'rgba(212,175,55,0.8)',
            border: hovering ? '1.5px solid rgba(212,175,55,0.5)' : 'none',
            boxShadow: hovering ? '0 0 15px rgba(212,175,55,0.3)' : '0 0 6px rgba(212,175,55,0.4)',
          }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{ x: pos.x - 18, y: pos.y - 18 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.6 }}
      >
        <div className="w-9 h-9 rounded-full" style={{ border: '1px solid rgba(212,175,55,0.15)' }} />
      </motion.div>

      <style jsx global>{`@media (pointer: fine) { * { cursor: none !important; } }`}</style>
    </>
  );
}
