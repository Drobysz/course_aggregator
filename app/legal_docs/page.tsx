'use client'

// Hooks 
import { useState, useEffect, useRef } from 'react';

// Components
import { Htag, P } from '@/components/index';
import { Anchor, Divider } from 'antd';

// Dependencies
import cn from 'classnames';

// JSON
import paragraphes from './paragraphes.json';
// Styles
import styles from './legal.module.scss';

// Fonts
import { robotoMono, oswald, quicksand } from '@/fonts/fonts';

// const buildAnchorLinks = ()=> {
//     paragraphes.map( pAnchor => {
//         return  { key: pAnchor.key, href: pAnchor.id, title: pAnchor.title };
//     } )
// };

export default function Page (){

    const topRef = useRef<HTMLDivElement>(null);
    const [ targetOffSet, setTargetOffSet ] = useState<number>();

    useEffect(() => {
        setTargetOffSet(topRef.current?.clientHeight);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className='flex flex-col gap-10'>
                <h1 className={ cn( 'text-5xl text-center pt-10', oswald.className ) }>Legal articles</h1>

                <div className='hidden justify-center min-[1040px]:flex'>
                    <Anchor
                    direction='horizontal'
                    targetOffset={targetOffSet}
                    items={
                        paragraphes.map( pAnchor => {
                            return  { key: pAnchor.key, href: pAnchor.id, title: pAnchor.title };
                        } )
                     }
                    />

                </div>
                
                <ul className='flex flex-col gap-20 mb-24'>
                    {
                        paragraphes.map( p => (
                            <li key={p.key} id={p.key} className='flex flex-col gap-4'>
                                <Divider orientation='center'><Htag tag='h2' className={robotoMono.className}>{p.title}</Htag></Divider>

                                <P size='m' className={quicksand.className}>{p.text}</P>
                            </li>
                        ) )
                    }
                </ul> 

                <Htag tag='h1' className='mb-14 self-center'>Thanks for your attention!</Htag>
            </div>
            <div className='hidden max-[1040px]:flex flex-col gap-5 pt-5'>
                <Htag tag='h1' className='self-center'>Content</Htag>

                <Anchor
                    targetOffset={targetOffSet}
                    items={
                        paragraphes.map( pAnchor => {
                            return  { key: pAnchor.key, href: pAnchor.id, title: pAnchor.title };
                        } )
                    }
                />
            </div>
            
           
        </div>
    );
};