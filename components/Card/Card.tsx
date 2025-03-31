// Style
import style from './Card.module.scss'

// Dependencies
import { FC, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import cn from 'classnames';

interface Cardprops extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    key?: number | string;
    children: ReactNode;
    className?: string;
    color?: 'white' | 'blue'; 
};

export const Card: FC<Cardprops> = ({className, color='white', children, ...props})=> {
    return (
        <div className={ cn( style.card, className, {
           ['bg-white']: color === 'white',
           ['bg-[#F9F8FF]']: color === 'blue'
        }) } {...props}>
            {children}
        </div>
    );
};