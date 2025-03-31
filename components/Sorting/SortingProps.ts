// Props
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export enum SortEnum {
    Rating,
    Price
};

export default interface SortingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortEnum;
    setSort: (sort: SortEnum)=> void;
    className: string;
};