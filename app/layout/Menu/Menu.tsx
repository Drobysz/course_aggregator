import { DetailedHTMLProps, HTMLAttributes, FC } from "react";
import { AppContext } from './../../context/app.context';
import { useContext } from 'react';
import { TopPageCategory } from "@/app/interfaces/page.interface";
import cn from 'classnames';
import Link from "next/link";
import { firstLevelMenuItem, PageItem } from "@/app/interfaces/menu.interface";
import { usePathname } from "next/navigation";

// Styles
import styles from './menu.module.scss'

// Icons
import CourseIcon from "./icons/Course_Icon";
import ServiceIcon from "./icons/Service_Icon";
import BookIcon from "./icons/Book_Icon";
import ProductIcon from "./icons/Product_Icon";


interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{ }

export const Menu: FC<MenuProps> = ({...props}) => {

    const { menu, firstCategory, setMenu } = useContext(AppContext);
    const pathname = usePathname();

    const firstLevelMenu: firstLevelMenuItem[] = [
      { route: "courses", name: "Courses", icon: <CourseIcon fill={ firstCategory === TopPageCategory.Courses ? '#7653FC' : '#787D85' }/>, id: TopPageCategory.Courses }, 
      { route: "services", name: "Services", icon: <ServiceIcon fill={ firstCategory === TopPageCategory.Services ? '#7653FC' : '#787D85' }/>, id: TopPageCategory.Services },
      { route: "books", name: "Books", icon: <BookIcon fill={ firstCategory === TopPageCategory.Books ? '#7653FC' : '#787D85' }/>, id: TopPageCategory.Books },
      { route: "products", name: "Products", icon: <ProductIcon fill={ firstCategory === TopPageCategory.Products ? '#7653FC' : '#787D85' }/>, id: TopPageCategory.Products }, 
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

      // menu.map( m => {
      //   if( m.pages.map(p => p.alias).includes(pathname.split('/')[2]) ){
      //     m.isOpened = true;
      //   }
      // } )

      return (
        <div className="flex flex-col gap-3 mb-10">
          {firstLevelMenu.map( menu=> (
            
            <div className="flex flex-col gap-5" key={menu.route}>
                <Link href={`/${menu.route}`}>
                    <div className={cn(styles.firstLevel, {
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