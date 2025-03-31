// Props
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react"

// Dependencies
import cn from 'classnames';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    className?: string;
    placeholder?: string;
};

export const Input: FC<InputProps> = ( { className, placeholder='type', ...props } )=> {
    return (
        <input
         className={ cn(className, 'shadow-inputShadow border-none outline-[var(--primary)] py-[0.438rem] px-[0.938rem] rounded-md bg-[var(--white)]') } 
         placeholder={placeholder}
         {...props}
        />
    );
};