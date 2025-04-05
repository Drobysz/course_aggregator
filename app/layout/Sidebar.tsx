// Props
import { DetailedHTMLProps, HTMLAttributes, FC } from "react";

// Components
import { Menu } from "./Menu/Menu";
import { Search } from '@/components/index'
import Link from "next/link";

// Dependencies
import cn from 'classnames'

// Image
import Image from "next/image";

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{ }

const sideBarStyle: string = "grid content-start gap-5 pt-[1.125rem]";

export const Sidebar: FC<SidebarProps> = ({className, ...props}) => {
    return (
        <div className={ cn(className, sideBarStyle) } {...props}>
            <Link className="cursor-pointer" href="/">
                <Image src="/skill-aggregator-logo.png" alt="Logo" width="159" height="44" className="justify-self-center rounded-2xl"/>
            </Link>
            
            {/* <Logo className="justify-self-center"/> */}
            <Search className="justify-self-end"/>
            <Menu/>
        </div>
    )
}