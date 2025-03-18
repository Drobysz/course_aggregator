// style
import styles from './TopPage.module.scss'

// Components
import { Htag, Tag } from "@/app/components/index";

// Props
import TopPageProps from "./TopPage.props";

// dependencies
import cn from 'classnames';

export default function TopPageComponent({firstCategory, page, product}: TopPageProps){

    console.log(firstCategory);
    console.log(page);
    console.log(product);
    return (
        <div className={styles.wrapper}>
           <div className={styles.upperHeader}>
                <div className={styles.pageUpperTitle}>
                    <Htag tag="h2">
                        {page?.title}
                    </Htag>
                    <Tag color="grey" size='m'>
                        {product?.length !== 0
                        ?
                        //  
                        10
                        :
                         "Нет продуктов"}
                    </Tag>
                </div>

                <div className={styles.filters}>
                    <span>По рейтингу</span>
                    <span>По цене</span>
                </div>
           </div>
        </div>
    )
}