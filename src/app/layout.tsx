import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import './globals.css';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { rootStructuredData, stringifyJsonLd } from '@/lib/structured-data';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Adam Rasfeld - Full Stack Developer',
    template: '%s | Adam Rasfeld',
  },
  description:
    'Full Stack Developer with 8+ years of experience building scalable web applications, mobile apps, and system architectures. Specializing in React, Node.js, TypeScript, and modern web technologies.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'Web Development',
    'Mobile App Development',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'System Architecture',
    'Cincinnati Developer',
    'Remote Developer',
  ],
  authors: [{ name: 'Adam Rasfeld', url: 'https://adamrasfeld.com' }],
  creator: 'Adam Rasfeld',
  publisher: 'Adam Rasfeld',
  metadataBase: new URL('https://adamrasfeld.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adamrasfeld.com',
    title: 'Adam Rasfeld - Full Stack Developer',
    description:
      'Full Stack Developer with 8+ years of experience building scalable web applications, mobile apps, and system architectures.',
    siteName: 'Adam Rasfeld Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Adam Rasfeld - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Rasfeld - Full Stack Developer',
    description:
      'Full Stack Developer with 8+ years of experience building scalable web applications, mobile apps, and system architectures.',
    images: ['/opengraph-image'],
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
  verification: {
    google: '-R-KI3oaQCkFTCZykSq3Xrv3V3E0U6EBq5zrhuEktyo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifyJsonLd(rootStructuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <div className="flex flex-col h-full w-full min-h-screen">
            <Header />
            <main className="mx-auto w-full flex-auto">{children}</main>
            <Footer />
          </div>
          <Toaster
            position="top-right"
            closeButton
            duration={4000}
            theme="system"
          />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
