'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Sections
import LoadingScreen from '@/components/sections/LoadingScreen';
import Envelope from '@/components/sections/Envelope';
import HeroNames from '@/components/sections/HeroNames';
import InvitationQuote from '@/components/sections/InvitationQuote';
import CoupleIntro from '@/components/sections/CoupleIntro';
import OurStory from '@/components/sections/OurStory';
import SaveTheDate from '@/components/sections/SaveTheDate';
import EventSchedule from '@/components/sections/EventSchedule';
import Venue from '@/components/sections/Venue';
import PhotoGallery from '@/components/sections/PhotoGallery';
import FamilyBlessings from '@/components/sections/FamilyBlessings';
import Rituals from '@/components/sections/Rituals';
import DressCode from '@/components/sections/DressCode';
import Footer from '@/components/sections/Footer';
import GoldDivider from '@/components/ui/GoldDivider';

// Lazy-load heavy UI
const ParticleBackground = dynamic(() => import('@/components/ui/ParticleBackground'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false });
const MusicPlayer = dynamic(() => import('@/components/ui/MusicPlayer'), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/ui/ScrollProgress'), { ssr: false });

export default function Home() {
  const [stage, setStage] = useState<'loading' | 'envelope' | 'main'>('loading');

  const handleLoadingComplete = useCallback(() => setStage('envelope'), []);
  const handleEnvelopeOpen = useCallback(() => setStage('main'), []);

  return (
    <main className="relative min-h-screen">
      {/* Film grain overlay - always on */}
      <div className="grain-overlay" />

      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {stage === 'loading' && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Envelope */}
      <AnimatePresence mode="wait">
        {stage === 'envelope' && <Envelope onOpen={handleEnvelopeOpen} />}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {stage === 'main' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {/* Global overlays */}
            <ParticleBackground />
            <CustomCursor />
            <MusicPlayer />
            <ScrollProgress />

            {/* 1. Hero — dark cinematic with background image */}
            <HeroNames />

            {/* Transition: dark → dark */}
            <GoldDivider variant="floral" dark />

            {/* 2. Invitation Verse — dark with mandala */}
            <InvitationQuote />

            {/* Transition: dark → light */}
            <GoldDivider variant="ornate" />

            {/* 3. Couple Introduction — light */}
            <CoupleIntro />

            {/* Transition: light → light */}
            <GoldDivider variant="floral" />

            {/* 4. Our Love Story — light */}
            <OurStory />

            {/* Transition: light → dark */}
            <GoldDivider variant="ornate" dark />

            {/* 5. Save the Date Countdown — dark */}
            <SaveTheDate />

            {/* Transition: dark → light */}
            <GoldDivider variant="floral" />

            {/* 6. Event Schedule — light */}
            <EventSchedule />

            {/* 7. Venue — full-screen image, no divider needed */}
            <Venue />

            {/* Transition: image → light */}
            <GoldDivider variant="ornate" />

            {/* 8. Photo Gallery — light */}
            <PhotoGallery />

            {/* Transition: light → dark */}
            <GoldDivider variant="floral" dark />

            {/* 9. Family Blessings — dark */}
            <FamilyBlessings />

            {/* Transition: dark → light */}
            <GoldDivider variant="ornate" />

            {/* 10. Rituals & Traditions — light */}
            <Rituals />

            {/* Transition: light → dark */}
            <GoldDivider variant="floral" dark />

            {/* 11. Dress Code — dark */}
            <DressCode />

            {/* 12. Footer — dark with background image */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
