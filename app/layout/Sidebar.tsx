import { DetailedHTMLProps, HTMLAttributes, FC } from "react";
import { Menu } from "./Menu/Menu";

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{ }

export const Sidebar: FC<SidebarProps> = ({...props}) => {
    return (
        <div {...props}>
            <Menu/>
        </div>
    )
}