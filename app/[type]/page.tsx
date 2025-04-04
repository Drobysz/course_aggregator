'use client';

// Hooks
import { use, useContext } from "react";

// Components
import { firstLevelMenu } from '@/helpers/firstLevelMenu';

// Dependencies
import { notFound } from "next/navigation";

// Context
import { AppContext } from '@/app/context/app.context';


export default function Page({params}: { params: Promise<{ type: string }> }){

    const { type } = use(params);
    const { menu, firstCategory, setMenu } = useContext(AppContext);
    const firstCategoryItem = firstLevelMenu.find( m => m.route === type );
    if (!firstCategoryItem) notFound();

    return (
        <>
            <h1>Category: {firstCategoryItem?.name}</h1>
        </>
    )
}