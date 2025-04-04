import { FC, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import cn from 'classnames'

interface Pprops extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 's' | 'm' | 'l';
    children: ReactNode,
    className?: string
}

export const P: FC<Pprops> =({size='m', children, className, ...props})=> {
    return (
        <p
          className={
            cn( className, {
                ['text-sm leading-6']: size == 's',
                ['text-base leading-6']: size == 'm',
                ['text-lg leading-[1.813rem]']: size == 'l',
            })
          }

          {...props}
        >
            {children}
        </p>
    )
}