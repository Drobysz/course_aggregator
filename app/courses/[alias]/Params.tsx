'use server'

import Page from './page'

import { MenuItem } from '../../interfaces/menu.interface'

export async function generateStaticParams (){
    const menuResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({firstCategory: 0}),
            cache: "force-cache"
            });
        const menuJson = await menuResponse.json();
    
        return menuJson.flatMap( (m: MenuItem)=> m.pages.map( (p: { alias: string })=> ({alias: "/courses/" + p.alias}) ));
};

export default async function pageWrapper( {params}: {params: {alias: string}} ) {  
      return <Page params={params}/>
}

export const revalidate = 100;