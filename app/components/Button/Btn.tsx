import BtnProps from './Btn.props'
import styles from './Btn.module.scss'
import { JSX } from "react"
import cn from 'classnames'
import ArrowIcon from './ArrowIcon'

export function Btn ({appearence, arrow='none', children, className, ...props}: BtnProps): JSX.Element{
    return (
    <button
        className={cn(styles.btn, className, {
            [styles.primary]: appearence == 'primary',
            [styles.ghost]: appearence == 'ghost'
        })}
        {...props}
    >
        {children}
        {
         arrow !== 'none'
             && <ArrowIcon
                    className={
                        cn(styles.arrow, {
                            [styles.down]: arrow === 'down',
                            [styles.right]: arrow === 'right'
                        })                
                    }
                />
        }
    </button>
)
}