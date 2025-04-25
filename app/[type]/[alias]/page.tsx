// Funcs
import { getPage } from '@/helpers/getDataFuncs';

// Props
import { firstLevelMenu } from '@/helpers/firstLevelMenu';

// Hooks + Next Nav
import { notFound } from 'next/navigation';

// Components
import { Suspense } from 'react';
import { FullScreenSpin } from '@/components/index';

import TopPageComponent from '../page-content/TopPage/TopPageComponent';

export const revalidate = 7200;

export async function generateStaticParams (){
    const paths: {type: string, alias: string}[] = [];
    for(const category of firstLevelMenu){
        const menuResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({firstCategory: category.id}),
            cache: "force-cache"
            });
        const menuJson = await menuResponse.json();
        for (const m of menuJson) {
          for (const p of m.pages) {
            paths.push({ type: category.route, alias: p.alias });
          }
        }
    };
    
    return paths;
};

export async function generateMetadata({params}: { params: Promise<{ type: string, alias: string }> }){
  const { alias } = await params;
  const page = await getPage(alias);
  if (!page.category) notFound();

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
};

export default async function Page({params}: { params: Promise<{ type: string, alias: string }> }) {

  const { type, alias } = await params;
  const firstCategoryItem = firstLevelMenu.find( m => m.route === type );

  const page = await getPage(alias);
  if (!page.category) notFound();
  if (!firstCategoryItem) notFound();
  
  return (
      <Suspense fallback={<FullScreenSpin />}>
          <TopPageComponent
            firstCategory={firstCategoryItem.id}     
            page={page}
            />
      </Suspense>
  );
};

