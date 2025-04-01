import { DetailedHTMLProps, HTMLAttributes, FC } from "react";
import { Menu } from "./Menu/Menu";
import { Search } from '@/components/index'
import cn from 'classnames'

// Logo
import Logo from './Logo'

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{ }

const sideBarStyle: string = "grid content-start gap-5 pt-[2.125rem]";

export const Sidebar: FC<SidebarProps> = ({className, ...props}) => {
    return (
        <div className={ cn(className, sideBarStyle) } {...props}>
            <Logo className="justify-self-center"/>
            <Search className="justify-self-center"/>
            <Menu/>
        </div>
    )
}