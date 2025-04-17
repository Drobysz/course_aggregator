'use client'

// Props
import { FC, DetailedHTMLProps, HTMLAttributes, useState, KeyboardEvent } from "react"

// Dependencies
import cn from 'classnames'
import { useRouter } from "next/navigation";

// Components
import { Input, Btn } from "./index";
import Image from "next/image";

interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    className?: string,
};

export const Search: FC<SearchProps> = ({ className='none', ...props }) => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const pushTo = ()=> {    
        router.push(`/search?q=${search}`);
    };
    const handleKeyDown = (e: KeyboardEvent)=> {
        if (e.key == 'Enter') pushTo();
    };

    return (
        <div className={ cn(className, 'relative w-fit') } {...props}>
            <Input 
                placeholder="search..."
                value={search}
                onChange={ (e)=> setSearch(e.target.value) }
                onKeyDown={(e)=> handleKeyDown(e)}
            />

            <Btn 
                appearence="primary" 
                onClick={()=> pushTo()}
                className="absolute top-0.5 right-0.5"
            >
                <Image src="/Loop.svg" alt="#" width="15" height="15"/>
            </Btn>
        </div>
    );
};

