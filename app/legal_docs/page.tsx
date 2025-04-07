'use client'

// Hooks 
import { useState, useEffect, useRef } from 'react';

// Components
import { Htag, P } from '@/components/index';
import { Anchor, Divider } from 'antd';

// Dependencies
import cn from 'classnames';

// JSON
import paragraphes from './paragraphes.json'
// Styles
import styles from './legal.module.scss'

// Fonts
import { Roboto_Mono, Oswald, Quicksand } from 'next/font/google'

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
  });

const quicksand = Quicksand({
    subsets: ['latin'],
    display: 'swap',
  });

const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap',
  });

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

                <Htag tag='h1' className='mb-14'>Thanks for your attention.</Htag>
            </div>
            <div className='flex flex-col gap-5 pt-5'>
                <Htag tag='h1' className='self-center'>Content</Htag>

                <Anchor
                    className={ cn( '', robotoMono.className ) }
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