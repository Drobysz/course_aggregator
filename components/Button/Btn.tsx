import BtnProps from './Btn.props'
import styles from './Btn.module.scss'
import { JSX } from "react"
import cn from 'classnames'
import ArrowIcon from './ArrowIcon'

export function Btn ({appearence, arrow='none', children, className, size='standard', ...props}: BtnProps): JSX.Element{
    return (
    <button
        className={cn(styles.btn, className, {
            [styles.primary]: appearence == 'primary',
            [styles.ghost]: appearence == 'ghost',
            ['p-2.5']: size === 'standard',
            ['p-5']: size === 'large'
        })}
        {...props}
    >
        {children}
        {
         arrow !== 'none'
             && <ArrowIcon
                    className={
                        cn(styles.arrow, {
                            ['rotate-90']: arrow === 'down',
                            ['rotate-0']: arrow === 'right',
                            ['rotate-[270deg]']: arrow === 'up',
                        })                
                    }
                />
        }
    </button>
)
}