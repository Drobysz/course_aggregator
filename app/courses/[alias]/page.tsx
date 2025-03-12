'use client'

import { MenuItem } from '../../interfaces/menu.interface'
import { TopPageModel } from '../../interfaces/page.interface'
import { ProductModel } from '../../interfaces/product.interface'

import { useEffect, useState, use } from "react";

export default function Page({params}: { params: Promise<{ alias: string }> }) {
    
    // Hooks for fetching data
    const [ menu, setMenu ] = useState<MenuItem[]>();
    const [ page, setPage ] = useState<TopPageModel>();
    const [ product, setProduct ] = useState<ProductModel[]>();

    const { alias } = use(params);


    useEffect(()=>{
        async function fetchData() {
            console.log(params);
            console.log(alias);

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
            body: JSON.stringify({firstCategory: 0}),
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
    },[params, alias])

    // PAGE
    
    console.log(menu);
    console.log(page);
    console.log(product);
 
    return <div>{page?.createdAt}</div>
}

