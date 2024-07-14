import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Montserrat_Alternates } from 'next/font/google';
// import { SpeedInsights } from '@vercel/speed-insights/next';
// import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';

import './globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nezdem.com'),
  title: {
    default: 'Dmitriy Yakovlev',
    template: '%s | Dmitriy Yakovlev',
  },
  description:
    'I am Dmitriy — your go-to guy for all things web design and frontend development',
  openGraph: {
    title: 'Dmitriy Yakovlev',
    description:
      'I am Dmitriy — your go-to guy for all things web design and frontend development',
    url: 'https://nezdem.com',
    siteName: 'Dmitriy Yakovlev',
    images: [
      {
        url: 'https://nezdem.com/og.png',
        width: 1200,
        height: 628,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Dmitriy Yakovlev',
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon.ico',
    apple: [
      { url: '/favicons/apple-icon.png' },
      {
        url: '/favicons/apple-icon-60x60.png',
        sizes: '60x60',
        type: 'image/png',
      },
      {
        url: '/favicons/apple-icon-76x76.png',
        sizes: '76x76',
        type: 'image/png',
      },
      {
        url: '/favicons/apple-icon-120x120.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        url: '/favicons/apple-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        url: '/favicons/apple-icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={clsx('h-full bg-zinc-950', montserrat.variable)}>
      <head />
      <body className="flex min-h-full flex-col font-montserrat">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* <Analytics />
        <SpeedInsights /> */}

        <svg className="absolute inset-0 isolate -z-10 h-full w-full stroke-zinc-100/[0.08] [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]">
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="rect"
              width={50}
              height={50}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 50V.5H50" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#rect)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </body>
    </html>
  );
};

export default RootLayout;
