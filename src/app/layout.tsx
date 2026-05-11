import type { Metadata } from 'next';
import { Great_Vibes, Playfair_Display, Cormorant_Garamond, Cinzel } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/providers/SmoothScroll';
import { COUPLE, WEDDING, IMAGES } from '@/lib/config';

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'], variable: '--font-great-vibes', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant', display: 'swap' });
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-cinzel', display: 'swap' });

export const metadata: Metadata = {
  title: `${COUPLE.groom.firstName} & ${COUPLE.bride.firstName} — Royal Wedding Invitation`,
  description: `You are cordially invited to the royal wedding celebration of ${COUPLE.groom.firstName} & ${COUPLE.bride.firstName} on ${WEDDING.displayDate} at ${WEDDING.venue.name}, ${WEDDING.venue.city}.`,
  keywords: ['wedding', 'invitation', 'royal wedding', COUPLE.groom.firstName, COUPLE.bride.firstName, WEDDING.venue.city],
  openGraph: {
    title: `${COUPLE.groom.firstName} & ${COUPLE.bride.firstName} — Wedding Invitation`,
    description: `Join us on ${WEDDING.displayDate} at ${WEDDING.venue.name}, ${WEDDING.venue.city}`,
    type: 'website',
    images: [{ url: IMAGES.hero, width: 1200, height: 630, alt: `${COUPLE.groom.firstName} & ${COUPLE.bride.firstName} Wedding` }],
  },
  twitter: { card: 'summary_large_image', title: `${COUPLE.groom.firstName} & ${COUPLE.bride.firstName} Wedding`, images: [IMAGES.hero] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${playfair.variable} ${cormorant.variable} ${cinzel.variable}`}>
      <body className="font-body antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
