import { DetailedHTMLProps, HTMLAttributes, FC } from "react";

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{ }

export const Sidebar: FC<SidebarProps> = ({...props}) => {
    return (
        <div {...props}>sidebar</div>
    )
}