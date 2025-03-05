import { DetailedHTMLProps, HTMLAttributes, FC } from "react";

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{ }

export const Header: FC<HeaderProps> = ({...props}) => {
    return (
        <div {...props}>header</div>
    )
}