'use client';

import { DetailedHTMLProps, HTMLAttributes, FC } from "react";
import { AppContext } from './../../context/app.context';
import { useContext } from 'react';
import { TopPageCategory } from "@/interfaces/page.interface";
import cn from 'classnames';
import Link from "next/link";
import { firstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import { usePathname } from "next/navigation";

// Styles
import styles from './menu.module.scss'

// Icons
import CourseIcon from "./icons/Course_Icon";
import ServiceIcon from "./icons/Service_Icon";
import BookIcon from "./icons/Book_Icon";


type MenuProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Menu: FC<MenuProps> = ({...props}) => {

    const { menu, firstCategory, setMenu, setFirstCategory } = useContext(AppContext);
    const pathname = usePathname();

    const firstLevelMenu: firstLevelMenuItem[] = [
      { route: "courses", name: "Courses", icon: <CourseIcon fill={ firstCategory === TopPageCategory.Courses ? '#086DFD' : '#787D85' }/>, id: TopPageCategory.Courses }, 
      { route: "services", name: "Services", icon: <ServiceIcon fill={ firstCategory === TopPageCategory.Services ? '#086DFD' : '#787D85' }/>, id: TopPageCategory.Services },
      { route: "tutors", name: "Tutors", icon: <BookIcon fill={ firstCategory === TopPageCategory.Tutors ? '#086DFD' : '#787D85' }/>, id: TopPageCategory.Tutors },
    ];

    const changeSecondCategory = (secondCategory: string)=> {
      setMenu?.(menu.map(m => {
        if (m._id.secondCategory === secondCategory){
          m.isOpened = !m.isOpened;
        }

        return m;
      }))
    }

    const buildFirstLevelMenu = ()=> {

      return (
        <div className="flex flex-col gap-3 mb-10">
          {firstLevelMenu.map( menu=> (
            
            <div className="flex flex-col gap-5" key={menu.route}>
                <Link onClick={ ()=> setFirstCategory!(menu.id) } href={`/${menu.route}`}>
                    <div
                     className={cn(styles.firstLevel, {
                      [styles.firstLevelActive]: menu.id === firstCategory,
                      
                    })}>
                        {menu.icon}
                        <span>{menu.name}</span>
                    </div>
                </Link>
                { menu.id === firstCategory && buildSecondLevelMenu(menu)}
            </div>

          ) )}
        </div>
      );
    };

    const buildSecondLevelMenu = (firstLevelMenuItem: firstLevelMenuItem)=> {
      return (
        <div className="flex flex-col gap-5 ml-[11px] pl-8 mb-5" style={{borderLeft: "2px solid #DFDFDF"}}>
          {menu.map( m=> (
            <div className="flex flex-col gap-1.5" key={m._id.secondCategory}>
              <div className={styles.secondLevel} onClick={()=> changeSecondCategory(m._id.secondCategory)}>{m._id.secondCategory}</div>
              <div className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockIsOpened]: m.isOpened
              })}>{buildThirdLevelMenu(firstLevelMenuItem.route, m.pages)}</div>
            </div>
          ) )}
        </div>
      );
    };

    const buildThirdLevelMenu = (route: string, pages: PageItem[])=> {
      return (
        <>
          {pages.map( page=> (
            <Link key={page._id} href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
              [styles.thirdLevelIsActive]: `/${route}/${page.alias}` === pathname
            })}>
              {page.category}
            </Link>
          ) )}
        </>
      )
    };

    return (
        <div className={styles.menu} {...props}>
            {buildFirstLevelMenu()}
        </div>
    )
}