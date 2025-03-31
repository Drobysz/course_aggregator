// Style
import styles from './TopPage.module.scss'

// Components
import { Htag, Tag, HhDataComponent, AdvantageBlock, TagsSet, Sorting } from "@/components/index";

// Props
import TopPageProps from "./TopPage.props";
import { TopPageCategory } from '@/app/interfaces/page.interface';
import { SortEnum } from '@/components/Sorting/SortingProps';
import { useReducer } from 'react';
import { sortReducer } from './sorting.reducer';

// Dependencies
// import parse from 'html-react-parser'

export default function TopPageComponent({firstCategory, page, product}: TopPageProps){

    // console.log(firstCategory);
    // console.log(page);
    console.log(product);

    if (Array.isArray(product)) {
        const [ {products: sortedProducts, sort}, dispatchSort ] = useReducer( sortReducer, { sort: SortEnum.Rating, products: product } );

        console.log(sortedProducts)
        console.log(sort)

        return (
        <div className={styles.wrapper}>
           <div className={styles.upperHeader}>
                <div className={styles.pageUpperTitle}>
                    <Htag tag="h1">
                        {page?.title}
                    </Htag>
                    <Tag color="grey" size='m'>
                        {product?.length !== 0
                        ?
                        product?.length
                        :
                         "Нет продуктов"}
                    </Tag>
                </div>

                {/* <div className={styles.filters}>
                    <span>По рейтингу</span>
                    <span>По цене</span>
                </div> */}
                <Sorting sort={sort} setSort={ (sort: SortEnum)=> dispatchSort({type: sort}) } className={styles.filters} />
            </div>
           <div>
              {sortedProducts && sortedProducts.map( p => (<div key={p._id}>{p.title}</div>) )}
           </div>

           <div className={styles.hhTitle}>
               <Htag tag='h2'>Вакансии - {page?.category}</Htag>
               <Tag color='red' size='s'>hh.ru</Tag>
           </div>

           { firstCategory == TopPageCategory.Courses && <HhDataComponent className='mb-[2.938rem]' {...page?.hh}/> }

           { page?.advantages.length !== 0 && <AdvantageBlock advantages={page?.advantages}/>}

           {/* { page?.seoText && <div>{parse(page?.seoText)}</div> } */}

           <TagsSet className='mb-[3.063rem]' tags={page?.tags}/>

        </div>
    );

    }

    
};