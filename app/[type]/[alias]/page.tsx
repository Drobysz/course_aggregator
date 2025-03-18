'use client'

// Props
import { firstLevelMenu } from '@/app/helpers/firstLevelMenu';
import { MenuItem } from '../../interfaces/menu.interface'
import { TopPageModel } from '../../interfaces/page.interface'
import { ProductModel } from '../../interfaces/product.interface'

// Hooks + Next Nav
import { useEffect, useState, use } from "react";
import { notFound } from 'next/navigation';

// Components
import TopPageComponent from '../page-content/TopPage/TopPageComponent';

export default function Page({params}: { params: Promise<{ type: string, alias: string }> }) {
    
    // Hooks for fetching data
    const [ menu, setMenu ] = useState<MenuItem[]>();
    const [ page, setPage ] = useState<TopPageModel>();
    const [ product, setProduct ] = useState<ProductModel[]>();

    const { type, alias } = use(params);
    const firstCategoryItem = firstLevelMenu.find( m => m.route === type );

    if (!firstCategoryItem) notFound();
    // console.log(type);
    // console.log(firstCategoryItem);

    try {
        useEffect(()=>{
            async function fetchData() {
                // console.log(params);
                // console.log(alias);

                const pageResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + alias, {
                method: "GET",
                headers:{
                "Content-Type" : "application/json"
                },
                cache: "force-cache"
            }).then(res => res.json());

                const [menuResponse, productResponse] = await Promise.all([
                    
                    // MENU
                    fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
                        method: "POST",
                        headers:{
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({firstCategory: firstCategoryItem?.id}),
                    cache: "force-cache"
                    }).then(res => res.json()),

                    // PRODUCT
                    fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
                        method: "POST",
                        headers:{
                            "Content-Type" : "application/json"
                        },
                        body: JSON.stringify({category: pageResponse.category, limit: 10}),
                        cache: "force-cache"
                        }).then(res => res.json()),
                ]);  
                
                setMenu(menuResponse);
                setPage(pageResponse);
                setProduct(productResponse);

            }
            fetchData();
    },[params, firstCategoryItem, alias]);
    } catch { notFound() };

    // PAGE

    // console.log(menu);
    // console.log(page);
    // console.log(product);

    // if (page === undefined) notFound();
 
    return (
        <>
            <TopPageComponent
             firstCategory={firstCategoryItem.id}
             page={page}
             product={product}             
             />
        </>
    );
};

