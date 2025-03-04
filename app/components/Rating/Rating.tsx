'use client'

import { DetailedHTMLProps, HTMLAttributes, useState, JSX, FC, useEffect, KeyboardEvent } from "react"
import StarIcon from "./StarIcon";
import cn from 'classnames'

interface Ratingprops extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number)=> void;
}

const basicStyle: string = 'flex gap-[0.313rem] w-fit';

export const Rating: FC<Ratingprops> = ({isEditable=false, rating, setRating, ...props}) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    
    const constructRating = (currentRating: number) => {
        const updateRating = ratingArray.map((r: JSX.Element, i: number,)=> {
            return(
                <StarIcon 
                    className={cn({['cursor-pointer']: isEditable})}
                    key={i}
                    fill={i <= (currentRating-1)? '#7653FC' : '#E2E2E2'}
                    onMouseEnter={()=> changeDisplay(i+1)}
                    onMouseLeave={()=> changeDisplay(rating)}
                    onClick={()=> onClick(i+1)}
                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<SVGElement>)=> isEditable && handleSpace(e, i+1)}
                />
            );
        });
        setRatingArray(updateRating);
    };

    const changeDisplay = (i: number)=>{
        if (!isEditable) return

        constructRating(i);
    }

    const onClick = (i: number)=>{
        if (!isEditable || !setRating) return

        setRating(i);
    }

    const handleSpace = (e: KeyboardEvent<SVGElement>, i: number) =>{
        if (e.code != 'Space' || !setRating) return
        setRating(i);
    }

    useEffect(()=>{
        constructRating(rating)
    },[rating]);

    return (
        <div
            className={basicStyle}
            {...props}
        >
            {
                ratingArray.map((r, i)=> (<span key={i}>{r}</span>))
            }
        </div>
    )
}