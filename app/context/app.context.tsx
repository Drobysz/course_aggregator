import { createContext, ReactNode, useEffect, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopPageCategory } from "../interfaces/page.interface";

interface MenuContextInterface {
    menu: MenuItem[] | Record<string, unknown>[],
    firstCategory: TopPageCategory,
    setMenu?: (newMenu: MenuItem[])=> void;
};

export const AppContext = createContext<MenuContextInterface>(
    {
        menu: [],
        firstCategory: TopPageCategory.Courses,
    }
);

export const AppContextProvider = ({children}: { children: ReactNode }) => {
    const [menuState, setMenuState] = useState<MenuItem[] | Record<string, unknown>[]>([]);
    
    const firstCategory = 0;

    useEffect(()=>{
        async function fetchMenuData() {
            const menuResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
                method: "POST",
                headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({firstCategory: 0}),
            cache: "force-cache"
            }).then(res => res.json());

            setMenuState(menuResponse);
        }

        fetchMenuData();
    }, []);

    const setMenu = (newMenu: MenuItem[])=> setMenuState(newMenu);
   
    return <AppContext.Provider value={ { menu: menuState, firstCategory: firstCategory, setMenu } } >
    {children}
</AppContext.Provider>
};
