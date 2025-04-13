// Layout components
import {Header} from "./layout/Header";
import {Sidebar} from "./layout/Sidebar";
import {Footer} from "./layout/Footer";

// Components
import { ToUpBtn } from '@/components/index';

// style
import "./layout/globals.css";

// tailwind
import styles from "./layout/SemanticLayout.module.scss";

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
        <div className={styles.wrapper}>
          <AppContextProvider>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.main}>
              {children}
              <ToUpBtn />
            </div>
            <Footer className={styles.footer}/>
          </AppContextProvider>
        </div>
        
      </body>
    </html>
  );
};