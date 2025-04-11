// Props
import { TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';
import { MenuItem } from '@/interfaces/menu.interface';

// Dependencies
import { notFound } from "next/navigation";

export async function getMenu (firstCategory: number): Promise<MenuItem[]> {
    const menuResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        method: "POST",
        headers:{
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({firstCategory: firstCategory}),
    cache: "force-cache"
    }).then(res => res.json());
    
    if (!menuResponse) notFound();

    return menuResponse;
};

export async function getPage ( alias: string ): Promise<TopPageModel> {
    const pageResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + alias, {
        method: "GET",
        headers:{
        "Content-Type" : "application/json"
        },
        cache: "force-cache"
    }).then(res => res.json());

    if (!pageResponse) notFound();

    return pageResponse;
};

export async function getProduct ( pageCategory: string ): Promise<ProductModel> {
    const productResponse = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({category: pageCategory, limit: 10}),
        cache: "force-cache"
    }).then(res => res.json());

    if (!productResponse) notFound();

    return productResponse;
};