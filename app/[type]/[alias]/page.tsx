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

export async function generateMetadata({params}: { params: { type: string, alias: string } }){
  const { alias } = await params;
  const page = await getPage(alias);
  if (!page.category) notFound();

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
};

export default async function Page({params}: { params: { type: string, alias: string } }) {

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

