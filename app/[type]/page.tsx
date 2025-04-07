'use client';

// Hooks
import { use, useContext } from "react";

// Components
import { CategoryPage } from '@/app/[type]/page-content/CategoryPage/CategoryPage';

// Dependencies
import { Spin } from "antd";

// Context
import { AppContext } from '@/app/context/app.context';

export default function Page({params}: { params: Promise<{ type: string }> }){

    const { type } = use(params);
    const { menu, setFirstCategoryWithRoute, firstCategoryItem } = useContext(AppContext);
   
    console.log('CATEGORY : ', type);
    setFirstCategoryWithRoute!(type);
    
    console.log('CATEGORY ITEM : ', firstCategoryItem);

    if ( (!firstCategoryItem) || (firstCategoryItem === undefined) ){
        return <div className="h-full flex justify-center items-center"><Spin size='large'/>;</div>
    };


    return <CategoryPage firstCategoryName={firstCategoryItem!.name} firstCategoryRoute={firstCategoryItem!.route} menu={menu}/>;
}