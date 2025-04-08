'use client'

// Dependencies
import cn from 'classnames';

// Components
import Image from 'next/image';

// Styles
import styles from './legal.module.scss'

// Fonts
import { robotoMono, oswald, quicksand } from '@/fonts/fonts';

export default function Page (){


    return (
        <div className={styles.wrapper}>
           <div className={styles.projectInfo}>

           </div>
           <div className={styles.creatorSide}>
                <Image src='#' alt='#creator' width={300} height={300} />

                <div className={styles.linkBar}>
                    
                </div>
           </div>
        </div>
    );
};