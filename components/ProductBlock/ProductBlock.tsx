// Components
import { PanelScroller, ProductPanel  } from '@/components/index';
import ArrowIcon from '@/components/Button/ArrowIcon';

// Props
import { ProductModel } from '@/interfaces/product.interface';
import { FC, DetailedHTMLProps, HTMLAttributes, useRef } from 'react';

// Hooks
import { useState, useEffect } from 'react';

// Style
import styles from './ProductBlock.module.scss'

// Interface
interface ProductBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    className?: string,
    products: ProductModel[]
};

export const ProductBlock: FC<ProductBlockProps> = ( { className, products } )=> {
    const [ panelID, setPanelID ] = useState<number>(0);
    const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        const productID = products[panelID]?._id;
        if (productID && panelRefs.current[productID]) {
          panelRefs.current[productID]!.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
          });
        }
      }, [panelID, products]);

    const scrollToTheLeft = ()=> {
        if (panelID - 1 != -1) setPanelID(panelID - 1);
    };

    const scrollToTheRight = ()=> {
        if (panelID + 1 <= products.length-1) setPanelID(panelID + 1);
    };

    return (
        <div className={className}>
            <div className={styles.productBlock}>

                <div 
                    className='cursor-pointer px-4 py-2' 
                    onClick={()=> scrollToTheLeft()}
                >
                    <ArrowIcon className='rotate-180' height='30' width='18'/>
                </div>
                
                <div className={styles.productPanel}>
                    {products.map( p => <ProductPanel
                     productModel={p}
                     key={p._id}
                     ref={(el) => {
                         panelRefs.current[p._id] = el;
                     }}       
                      /> )}
                </div>
                <div
                    className='cursor-pointer px-4 py-2'
                    onClick={()=> scrollToTheRight()}
                >
                    <ArrowIcon height='30' width='18'/>
                </div>

            </div>
            {/* Panel Scroller */}
            
            <PanelScroller productQtty={products.length} panelID={panelID} setPanelID={(id: number)=> setPanelID(id)}/>
        </div>
    )
};