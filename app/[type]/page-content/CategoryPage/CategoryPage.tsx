'use client';

// Components
import { Htag, Card } from '@/components/index';
import { Divider } from 'antd';
import Link from 'next/link';

// Props
import CategoryPageProps from './CategoryPageProps';
import { FC } from 'react';

// Style

import styles from './CategoryPsge.module.scss'

export const CategoryPage: FC<CategoryPageProps> = ( { firstCategoryName, firstCategoryRoute, menu } )=>{


    return (
        <div className="flex flex-col px-6">
            <div className="flex flex-col items-center">
                <Htag tag="h1" className="pt-5">Page of the category: {firstCategoryName}</Htag>
                <Divider />
            </div>

            <div className={styles.cardbox}>
                {
                    menu.map( item => (
                        <Card className='flex flex-col gap-1 p-5 rounded-lg border border-[var(--primary)] h-[150px]' key={item._id.secondCategory}>
                            <Htag tag='h3'>{item._id.secondCategory}</Htag>
                            <ul className='flex flex-col overflow-y-scroll pl-1'>
                                {
                                    item.pages.map( p => (
                                        <Link href={`/${firstCategoryRoute}/${p.alias}`} key={p._id}>
                                             <li className={styles.cardElement} key={ p._id }>
                                                 - {p.title}
                                             </li>
                                        </Link>
                                       
                                      )
                                    )
                                }
                            </ul>
                            
                        </Card>
                    ) )
                }
            </div>
        </div>
    )
};
