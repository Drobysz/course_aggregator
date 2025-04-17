'use client'

// Components
import { GridLayout } from './layout/GridLayout';

// Tailwind
import "./layout/globals.css";

// Main font
import { Noto_Sans } from 'next/font/google';

// Context wrapper
import { AppContextProvider } from './context/app.context';

const notoSans = Noto_Sans({
    subsets: ['latin'],
    display: 'swap',
  });

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="ru" className={notoSans.className}> 
      <body>
        <AppContextProvider>
          <GridLayout>{children}</GridLayout>
        </AppContextProvider>
      </body>
    </html>
  );
};