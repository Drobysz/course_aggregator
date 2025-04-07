//  Hooks
import { createContext, ReactNode, useEffect, useState } from "react";

// Props
import { MenuItem, firstLevelMenuItem } from "@/interfaces/menu.interface";
import { TopPageCategory, TopPageModel } from "@/interfaces/page.interface";
import { ProductModel } from "@/interfaces/product.interface";

// Components
import { firstLevelMenu } from '@/helpers/firstLevelMenu';

interface MenuContextInterface {
    menu: MenuItem[],
    page: TopPageModel | null,
    product: ProductModel[],

    firstCategory: TopPageCategory,
    contextAlias: string,

    firstCategoryItem: firstLevelMenuItem

    setMenu?: (newMenu: MenuItem[])=> void,
    setFirstCategory?: (num: TopPageCategory)=> void;
    setFirstCategoryWithRoute?: (route: string)=> void;
    setAlias?: (alias: string)=> void;
};

export const AppContext = createContext<MenuContextInterface>(
    {
        menu: [],
        page: null,
        product: [],
        firstCategory: TopPageCategory.Courses,
        contextAlias: '',
        firstCategoryItem: firstLevelMenu[0]
    }
);

export const AppContextProvider = ({children}: { children: ReactNode }) => {
    
    // States of Menu, Page, Products, FirstItemMenu
    const [ menuState, setMenuState ] = useState<MenuItem[]>([]);
    const [ pageState, setPage ] = useState<TopPageModel>();
    const [ productState, setProduct ] = useState<ProductModel[]>([]);
    const [ firstCategoryItem, setFirstCategoryItem ] = useState<firstLevelMenuItem>()

    // Category state
    const [firstCategory, setFirstCategoryState] = useState<TopPageCategory>(TopPageCategory.Courses);
    // Alias state
    const [contextAlias, setAiasState] = useState<string>('');

    // Fetching of Menu
    useEffect(()=>{
        async function fetchMenuData() {
            const menuResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
                method: "POST",
                headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({firstCategory: firstCategory}),
            cache: "force-cache"
            }).then(res => res.json());

            setMenuState(menuResponse);
        }

        fetchMenuData();
    }, [firstCategory]);

    // Fetching of Page and Products
    useEffect(()=>{
        async function fetchData() {

            // PAGE
            const pageResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + contextAlias, {
                method: "GET",
                headers:{
                "Content-Type" : "application/json"
                },
                cache: "force-cache"
            }).then(res => res.json());

            // PRODUCT
            const productResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({category: pageResponse.category, limit: 10}),
                cache: "force-cache"
            }).then(res => res.json())  ;

            setPage(pageResponse);
            setProduct(productResponse);

        }
        fetchData();
    },[contextAlias]);

    // State control functions
    const setMenu = (newMenu: MenuItem[])=> setMenuState(newMenu);
    const setFirstCategory = (category: TopPageCategory)=> setFirstCategoryState(category);
    const setAlias = (alias: string)=> setAiasState(alias);
    const setFirstCategoryWithRoute = ( route: string )=> {
        const firstCategoryItemState = firstLevelMenu.find( m => m.route === route );
        console.log('CONTEXT CATEGORY ITEM',firstCategoryItemState);
        setFirstCategoryItem(firstCategoryItemState);
        setFirstCategory(firstCategoryItemState!.id);
    };
   
    return <AppContext.Provider value={ { menu: menuState, page: pageState!, product: productState, firstCategory: firstCategory, contextAlias: contextAlias, firstCategoryItem: firstCategoryItem!, setMenu, setFirstCategory, setFirstCategoryWithRoute, setAlias } } >
    {children}
</AppContext.Provider>
};
