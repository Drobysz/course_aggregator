import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import cn from 'classnames'

interface Tagprops extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    size?: 's' | 'm';
    color?: 'ghost' | 'green' | 'red' | 'grey' | 'primary';
    href?: string;
    children: ReactNode;
}

const basicStyle: string = 'inline-flex justify-center items-center rounded-[1.25rem] w-fit px-2.5'

export const Tag: React.FC<Tagprops> =({size='s',color='ghost', href='#', children, className, ...props})=> {
    return (
        <div
            className={
                cn(basicStyle, className, {
                    // size
                    ['text-xs py-[0.188rem]']: size === 's',
                    ['text-sm py-[0.313rem]']: size === 'm',
                    //color
                    ['text-[var(--black)] border border-[#EBEBEB]']: color === 'ghost',
                    ['text-[var(--green)] bg-[var(--green-light)]']: color === 'green',
                    ['text-[var(--white)] bg-[var(--red)]']: color === 'red',
                    ['text-[var(--white)] bg-[#B3C0D9]']: color === 'grey',
                    ['text-[var(--primary)] border border-[var(--primary)]']: color === 'primary',
                })
            }
            {...props}
        >
            {
                href
                ?<a href={href} target="_blank">
                    {children}
                </a>
                : <>{children}</>
            }
        </div>
    )
}