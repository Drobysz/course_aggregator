'use server'

import Page from './page'

import { firstLevelMenu } from '@/app/helpers/firstLevelMenu';

export async function generateStaticParams (){
    return firstLevelMenu.map( m => '/' + m.route );
};

export default async function pageWrapper( {params}: {params: {type: string}} ) {  
      return <Page params={params}/>
}

export const revalidate = 10000;