'use client'

// Page
import { CategoryPage } from "@/app/[type]/page-content/CategoryPage/CategoryPage";

// Context
import { AppContext } from "@/app/context/app.context";

// Components
import { Suspense } from "react";
import { FullScreenSpin } from '@/components/index';

// Hooks
import { useContext, useEffect, useState } from "react";

// Props
import { firstLevelMenu } from "@/helpers/firstLevelMenu";
import { MenuItem } from "@/interfaces/menu.interface";

// Navigation
import { useSearchParams } from 'next/navigation';

// Funcs
import { buildResults } from "@/helpers/usefulFuncs";

function SearchParams(){
  // query
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q');

  const { menu, firstCategory } = useContext(AppContext);

  const firstCategoryItem = firstLevelMenu.find( m => m.id === firstCategory );

  const [menuResults, setMenuResults] = useState<MenuItem[]>([]);

  useEffect(()=> {
      const menuItems = buildResults(menu, searchQuery!);
      setMenuResults(menuItems);
  }, [searchQuery, menu]);
  
  return <CategoryPage menu={menuResults} firstCategoryName={searchQuery!} firstCategoryRoute={firstCategoryItem!.route} />
};

export default function Search() {
  

  return (
      <Suspense fallback={<FullScreenSpin />}>
        <SearchParams />
      </Suspense>
  );
};