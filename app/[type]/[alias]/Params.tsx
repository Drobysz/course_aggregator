'use server'

import Page from './page'

import { MenuItem } from '../../../interfaces/menu.interface'
import { firstLevelMenu } from '@/helpers/firstLevelMenu';

export async function generateStaticParams (){
    let paths: string[] = [];
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
        paths = paths.concat(menuJson.flatMap( (m: MenuItem)=> m.pages.map( (p: { alias: string })=> ({alias: `/${category.route}/${p.alias}`}) )))
    };
    
    return paths;
};

export default async function pageWrapper( {params}: {params: {type: string, alias: string}} ) {  
      return <Page params={params}/>
};