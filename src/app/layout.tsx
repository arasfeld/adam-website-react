import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import './globals.css';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Adam Rasfeld',
  description:
    'Personal portfolio and projects showcasing full-stack development skills, modern technologies, and creative problem-solving.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      </body>
    </html>
  );
}
