// Components
import Link from "next/link";

// Props
import { DetailedHTMLProps, HTMLAttributes, FC } from "react";

// Dependencies
import cn from "classnames"
import { format } from "date-fns"

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{ }

const footerStyle: string = 'bg-[var(--primary)] text-white px-[30px] py-[25px] text-base leading-5 gap-x-10 gap-y-2.5';
const linkStyle: string = 'duration-500 transition-all easy-in-out hover:text-[#d3d2d2]'

export const Footer: FC<FooterProps> = ({className, ...props}) => {
    return (
        <footer className={cn(className, footerStyle)} {...props}>
            <p>OwlTop © 2020 - { format(new Date(), 'yyyy') } All rights are reserved</p>
            <Link href="/legal_docs" className={linkStyle}>Legal docs</Link>
            <Link href="/about_project" className={linkStyle}>About the project</Link>
        </footer>
    )
}