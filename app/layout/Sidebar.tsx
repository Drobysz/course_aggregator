'use client'

// Props
import { DetailedHTMLProps, HTMLAttributes, FC } from "react";

// Components
import { Menu } from "./Menu/Menu";
import { Search } from '@/components/index'
import Link from "next/link";

// Animation
import { motion } from "framer-motion";

// Dependencies
import cn from 'classnames'

// Image
import Image from "next/image";

type SidebarProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const sideBarStyle: string = "content-start gap-5 pt-[1.125rem]";

export const Sidebar: FC<SidebarProps> = ({className}) => {

    return (
        <motion.div className={ cn(className, sideBarStyle)}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Link className="cursor-pointer" href="/">
                <Image src="/skill-aggregator-logo.png" alt="Logo" width="159" height="44" className="justify-self-center rounded-2xl"/>
            </Link>
            
            <Search className="justify-self-end"/>
            <Menu className="pl-4"/>
        </motion.div>
    )
}