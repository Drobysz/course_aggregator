// Components
import { Card, Rating, P, Btn, Htag, TagsSet, Tag } from "@/components/index";
import Image from "next/image";

// Style
import styles from './ProductPanel.module.scss'

// Props
import { FC, useState, Ref } from "react"
import { ProductModel } from "@/interfaces/product.interface";

// Functions
import { priceDecorator } from "@/helpers/usefulFuncs";

// Dependencies
import cn from 'classnames'
import { useRouter } from "next/navigation";

interface ProductPanelProps{
    className?: string;
    productModel: ProductModel
};

export const ProductPanel : FC<ProductPanelProps & { ref?: Ref<HTMLDivElement> }> = ({ className, productModel, ref })=> {
    const [isOpened, setOpened] = useState(false);
    const router = useRouter();

    return (
        <Card ref={ref && ref} className={ cn( className, styles.wrapper)}>
            <div className={styles.upper}>
                <div className={styles.titleSection}>
                    <Image className="rounded-lg" width={70} height={70} src={productModel.image} alt="#"/>

                    <div className={styles.titleBlock}>
                        <div className={styles.titleArea}>
                            <Htag className="w-fit" tag="h3">{productModel.title}</Htag>
                            <Image width={30} height={30} src="/Goblet.svg" alt="#"/>
                        </div>
                        
                        <TagsSet tags={productModel.categories} size="s" color="ghost"/>
                    </div>
                </div>

                <div className={styles.tarifInfo}>
                    <div>
                        <Htag className="flex items-center gap-1 max-[807px]:flex-col" tag="h3">
                            <p className="max-[838px]:text-base">{priceDecorator(productModel.price)} ₽</p>
                            <Tag color="green" size="s">{ priceDecorator(+productModel.price - +productModel.oldPrice) } ₽</Tag>
                        </Htag>
                        <P size="s">price</P>
                    </div>
                    <div>
                        <Htag tag="h3">
                            <p className="max-[838px]:text-base">{priceDecorator(productModel.credit)} ₽</p>  
                        </Htag>
                        <P size="s">in credit</P>
                    </div>
                    {
                        productModel.reviewAvg && (
                            <div className="pt-1">
                                <Rating rating={productModel.reviewAvg}/>
                              <P size="s">{productModel.reviewCount} reviews</P>
                            </div>
                        )
                    }
                </div>
            </div>

            <P className="mb-10 max-[985px]:mb-4" size="m">{productModel.description}</P>
            
            <div className="hidden max-[1040px]:flex justify-start mb-4">
                <Btn appearence="ghost" arrow={isOpened ? "right" : "down"}
                    onClick={()=> setOpened(!isOpened)}
                >
                    {isOpened ? "Less" : "More"} Info
                </Btn>
            </div>

            <div className={cn(styles.middle, {
                'hidden min-[1040px]:grid': isOpened === false,
                'grid': isOpened === true
            })}>
                <div className={styles.Data}>
                    { productModel.characteristics.map( char => (
                        <h3 className="flex w-full justify-between items-end gap-2" key={char.name}>
                             <span className="text-base font-bold">{char.name}</span>
                             <div className="border-b-4 border-dotted flex-grow mb-1.5"></div>
                             <span className="text-base text-[var(--black)] font-normal">{char.value}</span>
                        </h3>
                    ) ) }
                </div>

                <div className={styles.Characteristics}>
                    <div className={styles.AdvantageText}>
                        <h3 className="text-base font-bold">Advantages</h3>
                        <P size="s">{productModel.advantages ? productModel.advantages : 'Empty'}</P>
                    </div>
                    
                    <div className={styles.DisadvantageText}>
                        <h3 className="text-base font-bold">Disadvantages</h3>
                        <P size="s">Empty</P>
                    </div>
                </div>
            </div>

            <div className={cn(styles.bottom, {
                'hidden min-[1040px]:flex': isOpened === false,
                'flex': isOpened === true
            })} >
                <Btn appearence="primary" 
                    onClick={()=> router.push(productModel.link)}
                >Learn more</Btn>
                <Btn appearence="ghost" arrow="right">Read reviews</Btn>
            </div>
        </Card>
    );
};