import { use } from "react";
import { firstLevelMenu } from '@/app/helpers/firstLevelMenu';
import { notFound } from "next/navigation";

export default function Page({params}: { params: Promise<{ type: string, alias: string }> }){

    const { type } = use(params);
    const firstCategoryItem = firstLevelMenu.find( m => m.route === type );
    if (!firstCategoryItem) notFound();

    return (
        <>
            <h1>Category: {firstCategoryItem?.name}</h1>
        </>
    )
}