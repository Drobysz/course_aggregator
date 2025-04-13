// Components
import { CategoryPage } from '@/app/[type]/page-content/CategoryPage/CategoryPage';
import { Spin } from "antd";

// Funcs
import { getMenu } from '@/helpers/getDataFuncs';

// Props
import { Suspense } from 'react';
import { FullScreenSpin } from '@/components/index';

// Menu data
import { firstLevelMenu } from '@/helpers/firstLevelMenu';

export const revalidate = 7200;

export default async function Page({params}: { params: Promise<{ type: string }> }){

    const { type } = await params;
    const firstCategoryItem = firstLevelMenu.find( m => m.route === type );
    const menu = await getMenu(firstCategoryItem!.id);

    if ( (!firstCategoryItem!.name) || (!menu) ){
        return <div className="h-full flex justify-center items-center"><Spin size='large'/></div>
    };


    return <Suspense fallback={<FullScreenSpin />}><CategoryPage firstCategoryName={firstCategoryItem!.name} firstCategoryRoute={firstCategoryItem!.route} menu={menu}/></Suspense>;
}