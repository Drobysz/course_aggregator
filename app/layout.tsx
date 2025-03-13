'use client'

import {Header} from "./layout/Header"
import {Sidebar} from "./layout/Sidebar"
import {Footer} from "./layout/Footer"

import "./layout/globals.css";
import styles from "./layout/SemanticLayout.module.scss"
import { Noto_Sans } from 'next/font/google'
import { AppContextProvider } from './context/app.context'

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
            </div>
            <Footer className={styles.footer}/>
          </AppContextProvider>
        </div>
        
      </body>
    </html>
  );
};

// export const withLayout =  <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
//     return function withLayoutComponent(props: T): JSX.Element{
//         return (
//           <RootLayout>
//              <Component {...props}/>
//           </RootLayout>
//         );
//     };
// };