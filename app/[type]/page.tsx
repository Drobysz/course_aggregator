'use client';

// Hooks
import { use, useContext, useEffect, useState } from "react";

// Components
import { firstLevelMenu } from '@/helpers/firstLevelMenu';
import { CategoryPage } from '@/app/[type]/page-content/CategoryPage/CategoryPage';

// Dependencies
import { Spin } from "antd";

// Context
import { AppContext } from '@/app/context/app.context';

// Props
import { firstLevelMenuItem } from "@/interfaces/menu.interface";

export default function Page({params}: { params: Promise<{ type: string }> }){

    const { type } = use(params);
    const { menu, setFirstCategory } = useContext(AppContext);
    const [firstCategoryItem, setFirstCategoryItem] = useState<firstLevelMenuItem>();

    useEffect(()=>{
        const firstCategoryItem = firstLevelMenu.find( m => m.route === type );
        setFirstCategoryItem(firstCategoryItem);
        setFirstCategory!(firstCategoryItem!.id);
    }, [type]);

    if ( (!firstCategoryItem) || (firstCategoryItem === undefined) ){
         <Spin size='large'/>
    } else {
        setFirstCategory!(firstCategoryItem.id)
    };


    return <CategoryPage firstCategoryName={firstCategoryItem!.name} firstCategoryRoute={firstCategoryItem!.route} menu={menu}/>;
}