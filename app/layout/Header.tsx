'use client';

// Props
import { DetailedHTMLProps, HTMLAttributes, FC } from "react";

// Hooks
import { useContext } from "react";

// Context
import { AppContext } from "../context/app.context";

// Components
import Image from "next/image";
import { Htag } from '@/components/index';

// Dependencies
import cn from 'classnames';

type HeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Header: FC<HeaderProps> = ({className, ...props}) => {
    const { burgerState, setBurger } = useContext(AppContext);

    return (
        <div {...props} className={cn(className, "justify-end items-center px-5 py-2")}>
            <div className="flex gap-3 items-center">
                <Htag tag="h1">MENU</Htag>
                <Image 
                    src={burgerState ? '/Burger_off.svg' : '/Burger_on.svg'} 
                    width={40} 
                    height={40} 
                    alt="burger" 
                    onClick={()=> setBurger!(!burgerState)}
                    className="cursor-pointer"
                />
            </div>
        </div>
    )
}