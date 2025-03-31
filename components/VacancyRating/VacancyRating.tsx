'use client'

import { DetailedHTMLProps, HTMLAttributes, useState, JSX, FC, useEffect } from "react"
import VacancyStarIcon from "./VacancyStar";

interface VacancyRatingprops extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    rating: number;
}

const basicStyle: string = 'flex w-fit';

export const VacancyRating: FC<VacancyRatingprops> = ({rating, ...props}) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(3).fill(<></>));

    
    const constructRating = (currentRating: number) => {
        const updateRating = ratingArray.map((r: JSX.Element, i: number,)=> {
            return(
                <VacancyStarIcon
                    key={i}
                    fill={i <= (currentRating-1)? 'var(--orange)' : '#BBBBBB'}
                />
            );
        });
        setRatingArray(updateRating);
    };

    useEffect(()=>{
        constructRating(rating)
    },[rating]);

    return (
        <div
            className={basicStyle}
            {...props}
        >
            {
                ratingArray.map((r, i)=> (<div key={i}>{r}</div>))
            }
        </div>
    );
};