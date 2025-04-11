'use client';

// Hooks
import { use, useContext, useEffect, useState } from "react";

// Components
import { CategoryPage } from '@/app/[type]/page-content/CategoryPage/CategoryPage';

// Dependencies
import { Spin } from "antd";

// Context
import { AppContext } from '@/app/context/app.context';

// Props
import { firstLevelMenuItem } from '@/interfaces/menu.interface';

// Menu data
import { firstLevelMenu } from '@/helpers/firstLevelMenu';

export default function Page({params}: { params: Promise<{ type: string }> }){

    const { type } = use(params);
    const { menu, setFirstCategory } = useContext(AppContext);
    const [ firstCategoryItem, setFirstCategoryItem ] = useState<firstLevelMenuItem>(firstLevelMenu[0])
    useEffect(()=> {
        const firstCategoryItemDefined = firstLevelMenu.find( m => m.route === type );
        setFirstCategoryItem(firstCategoryItemDefined!);

        setFirstCategory!( firstCategoryItemDefined!.id );
    }, [type, setFirstCategory]);

    if ( (!firstCategoryItem.name) || (!menu) ){
        return <div className="h-full flex justify-center items-center"><Spin size='large'/></div>
    };


    return <CategoryPage firstCategoryName={firstCategoryItem!.name} firstCategoryRoute={firstCategoryItem!.route} menu={menu}/>;
}