'use client'

// Props
import { firstLevelMenu } from '@/helpers/firstLevelMenu';

// Hooks + Next Nav
import { useEffect, useContext, use } from "react";
import { notFound } from 'next/navigation';

// Context
import { AppContext } from '@/app/context/app.context';

// Components
import TopPageComponent from '../page-content/TopPage/TopPageComponent';

export default function Page({params}: { params: Promise<{ type: string, alias: string }> }) {

    const { type, alias } = use(params);
    const firstCategoryItem = firstLevelMenu.find( m => m.route === type );

    const { setAlias } = useContext(AppContext);
    
    useEffect(() => {
        if (setAlias && alias) {
          setAlias(alias);
        } else {
            notFound();
        };
      }, [alias, setAlias]);

    if (!firstCategoryItem) notFound();
    
    return (
        <>
            <TopPageComponent
             firstCategory={firstCategoryItem.id}          
             />
        </>
    );
};

