'use client'

// Props
import { DetailedHTMLProps, HTMLAttributes, FC } from "react";

// Components
import { Menu } from "./Menu/Menu";
import { Search } from '@/components/index'
import Link from "next/link";

// Animation
import { motion } from "framer-motion";

// Context
import { AppContext } from "../context/app.context";

// Hooks
import { useContext } from "react";

// Dependencies
import cn from 'classnames'

// Image
import Image from "next/image";

type SidebarProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const sideBarStyle: string = "hidden max-[765px]:grid content-start max-[765px]:justify-items-center gap-5 pt-[1.125rem] absolute left-0 bg-[#F5F6F8] border-r-2 border-b-2 z-10";

export const SidebarMobile: FC<SidebarProps> = ({className}) => {
    const { burgerState } = useContext(AppContext);

    return (
        <motion.div className={ cn(sideBarStyle, className, {
                ['grid']: burgerState,
            }) }
            initial={{ height: 0, opacity: 0 }}
            animate={ burgerState ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Link className="cursor-pointer" href="/">
                <Image src="/skill-aggregator-logo.png" alt="Logo" width="159" height="44" className="min-[765px]:justify-self-center rounded-2xl"/>
            </Link>
            
            <Search className="min-[765px]:justify-self-end"/>
            <Menu className="pl-4"/>
        </motion.div>
    )
}