// Props
import Htagprops from "./Htag.props";
// Style
import styles from './Htag.module.scss'
// dependencies
import { JSX } from "react";
import cn from 'classnames'

export function Htag ({tag, children}: Htagprops): JSX.Element {
    return <h3
             className={
                cn('text-[var(--black)]' ,{
                  [styles.h1]: tag === 'h1',
                  [styles.h2]: tag === 'h2',
                  [styles.h3]: tag === 'h3',  
                })
            }
            >
                {children}
            </h3>
};