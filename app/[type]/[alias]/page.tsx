// Funcs
import { getPage } from '@/helpers/getDateFuncs';

// Props
import { firstLevelMenu } from '@/helpers/firstLevelMenu';

// Hooks + Next Nav
import { notFound } from 'next/navigation';

// Components
import { Suspense } from 'react';
import { FullScreenSpin } from '@/components/index';

import TopPageComponent from '../page-content/TopPage/TopPageComponent';

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

