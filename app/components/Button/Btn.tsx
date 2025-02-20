import BtnProps from './Btn.props'
import styles from './Btn.module.scss'
import { JSX } from "react"
import cn from 'classnames'

export function Btn ({appearence, children}: BtnProps): JSX.Element{
    return (
    <button
        className={cn(styles.btn, {
            [styles.primary]: appearence == 'primary',
            [styles.ghost]: appearence == 'ghost'
        })}
    >
        {children}
    </button>
)
}