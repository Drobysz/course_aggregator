import { DetailedHTMLProps, HTMLAttributes, FC } from "react";

type HeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Header: FC<HeaderProps> = ({...props}) => {
    return (
        <div {...props}>header</div>
    )
}