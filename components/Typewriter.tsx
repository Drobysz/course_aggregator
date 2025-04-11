'use client'

// Hooks
import { useState, useEffect } from 'react';

// Props
import { FC, DetailedHTMLProps, HTMLAttributes } from "react"

interface TypewriterProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{
    text: string,
    delay: number,
    infinite?: boolean,
    className?: string
}

export const Typewriter: FC<TypewriterProps> = ( {text, delay, infinite=false, className} )=> {
    const [ textValue, setTextValue ] = useState<string>('');
    const [ index, setIndex ] = useState<number>(0);

    useEffect(()=> {
        let timeout;

        if (index < text.length){
            timeout = setTimeout(() => {
                setTextValue( prevTextValue => prevTextValue + text[index] );
                setIndex( prevIndex => prevIndex + 1 );
            }, delay);
        } else if ( infinite ) {
            setTextValue('');
            setIndex(0);
        }
        
        return () => clearTimeout(timeout!);
    }, [text, index, delay, infinite]);

    useEffect(() => {
        setTextValue('');
        setIndex(0);
      }, [text]);

    return (
        <span className={className}>{textValue}</span>
    );
};