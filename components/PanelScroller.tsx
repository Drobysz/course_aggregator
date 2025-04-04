// Props
import { FC, DetailedHTMLProps, HTMLAttributes, useState, useEffect } from "react";

// Dependencies
import cn from 'classnames';

interface PanelScrollerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    className?: string,
    productQtty: number 
    panelID: number,
    setPanelID: (n: number)=> void;
};

export const PanelScroller: FC<PanelScrollerProps> = ( { productQtty, panelID, setPanelID } )=> {
    const [ hoveredID, setHoveredID ] = useState<number>(panelID);

    const onClick = (i: number)=> {
        if ((!setPanelID) && (i == panelID)) return;

        setPanelID(i);
    };

    useEffect(()=> {
        setHoveredID(panelID)
    }, [panelID]);

    return (
        <div className='flex justify-center'>
            { Array.from({length: productQtty}).map( (btn, i) => (
                <span
                key={i}
                className="px-2 py-2"
                onClick={()=> onClick(i)}
                onMouseEnter={()=> setHoveredID(i)}
                onMouseLeave={()=> setHoveredID(panelID)}
                >
                   <div
                       key={i}
                       className={ cn( 'h-[16px] w-[40px] bg-slate-400 rounded-full cursor-pointer transition-all ease-in-out duration-200', {
                           ['w-[80px] bg-slate-700']: hoveredID === i
                       } ) }
                   >
                   </div>
               </span>
            )) }
        </div>
    );
};