'use client'

// Tailwind
import "./layout/globals.css";

// Main font
import { Noto_Sans } from 'next/font/google';

// Context wrapper
import { AppContextProvider } from './context/app.context';

// Components
import { ToUpBtn } from '@/components/index';

// Layout components
import {Header} from "./layout/Header";
import {Sidebar} from "./layout/Sidebar";
import {SidebarMobile} from "./layout/SidebarMobile";
import {Footer} from "./layout/Footer";

// Style
import styles from './layout/SemanticLayout.module.scss';

// Dependencies
import cn from 'classnames';

const notoSans = Noto_Sans({
    subsets: ['latin'],
    display: 'swap',
  });

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="ru" className={notoSans.className}> 
      <body>
        <AppContextProvider>
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={cn(styles.sidebar)}/>
            <SidebarMobile className={cn(styles.sidebarMobileState)}/>
            <div className={styles.main}>
              {children}
              <ToUpBtn />
            </div>
            <Footer className={styles.footer}/>
        </div>
        </AppContextProvider>
      </body>
    </html>
  );
};