// Props
import { FC } from 'react'
import SortingProps, { SortEnum } from './SortingProps';

// Components
import Image from 'next/image';

//  Dependencies
import cn from 'classnames'


export const Sorting: FC<SortingProps> = ({sort, setSort, className})=> {

    return (
        <div className={className}>
            <span 
                className={cn('flex gap-2 cursor-pointer transition-all duration-200', {
                    ['text-[var(--primary)] font-normal']: sort === SortEnum.Rating,
                    ['text-black font-normal text-base']: sort === SortEnum.Price,
                })}
                onClick={ ()=>  setSort(SortEnum.Rating)}
            >
                 { sort === 0 && <Image width={20} height={13} src='/Filter.svg' alt='#'/> }  По рейтингу
            </span>
            <span
                className={cn('flex gap-2 cursor-pointer transition-all duration-200', {
                    ['text-[var(--primary)] font-normal']: sort === SortEnum.Price,
                    ['text-black font-normal text-base']: sort === SortEnum.Rating,
                })}
                onClick={ ()=>  setSort(SortEnum.Price)}
             >
                 { sort === 1 && <Image width={20} height={13} src='/Filter.svg' alt='#'/> } По цене
            </span>
        </div>
    );
};