// Style
import styles from './Advantages.module.scss'

// Props
import { Advantage } from '@/interfaces/page.interface';
import React, { DetailedHTMLProps, HTMLAttributes, FC } from "react";

// Components
import { Htag } from "@/components/index";
import Image from 'next/image';

// Dependencies
import cn from 'classnames';

interface AdvantagesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    advantages: Advantage[];
};

export const AdvantageBlock: FC<AdvantagesProps> = ({advantages})=>{

    return (
        <div className={styles.AdvantageBlock}>
           <Htag tag='h2'>Advantages</Htag> 
           <ul key="skip" className={styles.articleBlock}>
               {
                advantages?.map( advantage => (<React.Fragment key={advantage._id}>
                        {
                            advantage.description !== '' &&
                            (
                                <li key={advantage._id} className={styles.article}>
                        
                                    <div className={styles.iconBlock}>
                                        <Image src='/AdvantageIcon.svg' alt='#' width="50" height="50" />
                                        <div className={styles.line}></div>
                                    </div>
                                    <div className={styles.textBlock}>
                                        <Htag tag='h3'>{advantage.title}</Htag>
                                        <p>{advantage.description}</p>
                                    </div>
                                </li>
                            )
                            
                        }

                        {
                            advantage.description == '' &&
                            (
                                <li key={advantage._id} className={cn(styles.article, 'items-center')}>
                                    <Image src='/AdvantageIcon.svg' alt='#' width="50" height="50" />
                                    <Htag tag='h3'>{advantage.title}</Htag>
                                </li>
                            )
                        }
                    
                </React.Fragment>)
                 )
               } 
           </ul>
            
        </div> 
    );
};