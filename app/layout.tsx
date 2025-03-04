import {Header} from "./layout/Header"
import {Sidebar} from "./layout/Sidebar"
import {Footer} from "./layout/Footer"

import "./layout/globals.css";
import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({
    subsets: ['latin'],
    display: 'swap',
  })

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="ru" className={notoSans.className}> 
      <body>
        <Header/>
        <div>
          <Sidebar/>
          <div>
            {children}
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
