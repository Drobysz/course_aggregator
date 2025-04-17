'use client';

// Props
import { FC, ReactNode } from "react";

// Dependencies
import cn from 'classnames';

// Style
import styles from './SemanticLayout.module.scss';

// Components
import { ToUpBtn } from '@/components/index';

// Layout components
import {Header} from "./Header";
import {Sidebar} from "./Sidebar";
import {SidebarMobile} from "./SidebarMobile";
import {Footer} from "./Footer";

interface GridLayoutProps{
    children: ReactNode;
};

export const GridLayout: FC<GridLayoutProps> = ({children}) => {

    return (
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
    )
}