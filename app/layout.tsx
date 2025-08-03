import './globals.css';
import type { Metadata } from 'next';
import { Inter, Dancing_Script } from 'next/font/google';
import { PageTransition } from '@/components/PageTransition';
import { FloatingHeart } from '@/components/FloatingHeart';

const inter = Inter({ subsets: ['latin'] });
const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing'
});

export const metadata: Metadata = {
  title: 'Wanna Go On A Date? 💕',
  description: 'Ask someone out with the cheesiest pickup lines ever!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancingScript.variable}`}>
        <PageTransition>
          {children}
        </PageTransition>
        <FloatingHeart />
      </body>
    </html>
  );
}