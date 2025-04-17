'use client'

// Funcs
import { getMenu } from '@/helpers/getDataFuncs';

//  Hooks
import { createContext, ReactNode, useEffect, useState } from "react";

// Props
import { MenuItem } from "@/interfaces/menu.interface";
import { TopPageCategory } from "@/interfaces/page.interface";

interface MenuContextInterface {
    menu: MenuItem[],
    burgerState: boolean,
    firstCategory: TopPageCategory,

    setMenu?: (newMenu: MenuItem[])=> void,
    setFirstCategory?: (num: TopPageCategory)=> void;
    setBurger?: (burgerState: boolean)=> void;
};

export const AppContext = createContext<MenuContextInterface>(
    {
        menu: [],
        firstCategory: TopPageCategory.Courses,
        burgerState: false
    }
);

export const AppContextProvider = ({children}: { children: ReactNode }) => {
    
    // States of Menu, of Category, of Burger
    const [ menuState, setMenuState ] = useState<MenuItem[]>([]);
    const [firstCategory, setFirstCategory] = useState<TopPageCategory>(TopPageCategory.Courses);
    const [burgerState, setBurgerState] = useState<boolean>(false);

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
    const setBurger = (burgerState: boolean)=> setBurgerState(burgerState);
   
    return <AppContext.Provider value={ { menu: menuState, firstCategory: firstCategory, burgerState: burgerState, setMenu, setFirstCategory, setBurger } } >
    {children}
</AppContext.Provider>
};
