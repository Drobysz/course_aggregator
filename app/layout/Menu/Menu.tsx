import { DetailedHTMLProps, HTMLAttributes, FC } from "react";
import { AppContext } from './../../context/app.context';
import { useContext } from 'react';
import { TopPageCategory } from "@/app/interfaces/page.interface";
import cn from 'classnames'

// Styles
import styles from './menu.module.scss'

// Icons
import CourseIcon from "./icons/Course_Icon";
import ServiceIcon from "./icons/Service_Icon";
import BookIcon from "./icons/Book_Icon";
import ProductIcon from "./icons/Product_Icon";
import { firstLevelMenuItem, PageItem } from "@/app/interfaces/menu.interface";

interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{ }

export const Menu: FC<MenuProps> = ({...props}) => {

    const { menu, firstCategory, setMenu } = useContext(AppContext);

    const firstLevelMenu: firstLevelMenuItem[] = [
      { route: "courses", name: "Курсы", icon: <CourseIcon fill={ firstCategory === TopPageCategory.Courses ? '#7653FC' : '#787D85' }/>, id: TopPageCategory.Courses }, 
      { route: "services", name: "Сервисы", icon: <ServiceIcon fill={ firstCategory === TopPageCategory.Services ? '#7653FC' : '#787D85' }/>, id: TopPageCategory.Services },
      { route: "books", name: "Книги", icon: <BookIcon fill={ firstCategory === TopPageCategory.Books ? '#7653FC' : '#787D85' }/>, id: TopPageCategory.Books },
      { route: "products", name: "Продукты", icon: <ProductIcon fill={ firstCategory === TopPageCategory.Products ? '#7653FC' : '#787D85' }/>, id: TopPageCategory.Products }, 
    ];

    const buildFirstLevelMenu = ()=> {
      return (
        <div className="flex flex-col gap-5 mb-10">
          {firstLevelMenu.map( menu=> (
            
            <div className="flex flex-col gap-5" key={menu.route}>
                <a href={`/${menu.route}`}>
                    <div className={cn(styles.firstLevel, {
                      [styles.firstLevelActive]: menu.id === firstCategory,
                    })}>
                        {menu.icon}
                        <span>{menu.name}</span>
                    </div>
                </a>
                { menu.id === firstCategory && buildSecondLevelMenu(menu)}
            </div>

          ) )}
        </div>
      );
    };

    const buildSecondLevelMenu = (firstLevelMenuItem: firstLevelMenuItem)=> {
      return (
        <div className="flex flex-col gap-7 ml-[11px] pl-8" style={{borderLeft: "2px solid #DFDFDF"}}>
          {menu.map( m=> (
            <div className="flex flex-col gap-1.5" key={m._id.secondCategory}>
              <div className={styles.secondLevel}>{m._id.secondCategory}</div>
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
            <a key={page._id} href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
              [styles.thirdLevelIsActive]: false
            })}>
              {page.category}
            </a>
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