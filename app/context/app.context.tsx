// Funcs
import { getMenu } from '@/helpers/getDateFuncs';

//  Hooks
import { createContext, ReactNode, useEffect, useState } from "react";

// Props
import { MenuItem } from "@/interfaces/menu.interface";
import { TopPageCategory } from "@/interfaces/page.interface";

interface MenuContextInterface {
    menu: MenuItem[],

    firstCategory: TopPageCategory,

    setMenu?: (newMenu: MenuItem[])=> void,
    setFirstCategory?: (num: TopPageCategory)=> void;
};

export const AppContext = createContext<MenuContextInterface>(
    {
        menu: [],
        firstCategory: TopPageCategory.Courses,
    }
);

export const AppContextProvider = ({children}: { children: ReactNode }) => {
    
    // States of Menu, Page, Products, FirstItemMenu
    const [ menuState, setMenuState ] = useState<MenuItem[]>([]);

    // Category state
    const [firstCategory, setFirstCategory] = useState<TopPageCategory>(TopPageCategory.Courses);

    // Fetching of Menu
    useEffect(()=>{
        async function fetchMenuData() {
            const menuResponse = await getMenu(firstCategory);

            setMenuState(menuResponse);
        }

        fetchMenuData();
    }, [firstCategory]);


    // State control functions
    const setMenu = (newMenu: MenuItem[])=> setMenuState(newMenu);
   
    return <AppContext.Provider value={ { menu: menuState, firstCategory: firstCategory, setMenu, setFirstCategory } } >
    {children}
</AppContext.Provider>
};
