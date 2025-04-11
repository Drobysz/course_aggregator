'use client'

// Funcs
import { getProduct } from '@/helpers/getDataFuncs';

// Style
import styles from './TopPage.module.scss'

// Components
import { Htag, Tag, HhDataComponent, AdvantageBlock, TagsSet, Sorting, ProductBlock } from "@/components/index";
import { Spin } from 'antd';

// Props
import TopPageProps from "./TopPage.props";
import { TopPageCategory } from '@/interfaces/page.interface';
import { SortEnum } from '@/components/Sorting/SortingProps';
import { ProductModel } from '@/interfaces/product.interface';

// Hooks
import { useState, useEffect, useReducer } from 'react';

// A function for the reducer
import { sortReducer } from './sorting.reducer';

export default function TopPageComponent({firstCategory, page, }: TopPageProps){

    const [ product, setProduct ] = useState<ProductModel>();

    useEffect(()=>{
        async function fetchProductData() {
            const productData = await getProduct(page.category);

            setProduct(productData);
        };
        fetchProductData();
    }, [page.category]);

    const [ {products: sortedProducts, sort}, dispatchSort ] = useReducer( sortReducer, { sort: SortEnum.Rating, products: [] } );

    useEffect(()=>{
        if ((Array.isArray(product) && (product.length != 0))){
            dispatchSort({ type: 'SET_PRODUCTS', payload: product });
        };
    }, [product]);

    if ( sortedProducts.length === 0 ) return <div className='h-full flex justify-center items-center'><Spin size='large' /></div>;
    console.log(product);
    console.log(page);

    return (
        <div className={styles.wrapper}>

            {/* Page Header */}
           <div className={styles.upperHeader}>
                <div className={styles.pageUpperTitle}>
                    <Htag className='max-w-max' tag="h1">
                        {page?.title}
                    </Htag>
                   
                    <Tag color="grey" size='m'>
                        {sortedProducts.length !== 0 ? sortedProducts.length: "No products"}
                    </Tag>
                </div>
                {
                   sortedProducts.length !== 0 &&
                   (
                    <Sorting sort={sort} setSort={ (sort: SortEnum)=> dispatchSort({type: sort}) } className={styles.filters} />
                   ) 
                }
                
           </div>
           
           {/* Courses */}
           { sortedProducts && sortedProducts.length != 0 && <ProductBlock className='mb-6' products={sortedProducts}/>}

           {/* HH statistic */} 
           <div className={styles.hhTitle}>
               <Htag tag='h2'>Vacancies - {page?.category}</Htag>
               <Tag color='red' size='s'>hh.ru</Tag>
           </div>
           { firstCategory == TopPageCategory.Courses && <HhDataComponent className='mb-[2.938rem]' {...page?.hh}/> }

           {/* List with advantages */}
           { page && page.advantages && page.advantages.length !== 0 && <AdvantageBlock advantages={page!.advantages}/>}
           
           {/* Skill tags */}
           <TagsSet className='mb-[3.063rem]' title='Acquiring skills' color='primary' size='m' tags={page!.tags}/>

        </div>
    );
    
};