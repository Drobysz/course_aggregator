import Htagprops from "./Htag.props";
import styles from './Htag.module.scss'
import { JSX } from "react";

export function Htag ({tag, children}: Htagprops): JSX.Element {
    console.log(styles.h1)
    console.log(styles.h2)
    console.log(styles.h3)
    return <h3
             className={
                tag === 'h1' ? styles.h1:
                tag === 'h2' ? styles.h2:
                tag === 'h3' ? styles.h3: ''
            }
            >
                {children}
            </h3>
}