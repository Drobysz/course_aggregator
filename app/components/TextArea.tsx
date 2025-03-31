// Props
import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from "react"

// Dependencies
import cn from 'classnames';

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>{
    className?: string;
    placeholder?: string;
};

export const TextArea: FC<TextAreaProps> = ( { className, placeholder='type', ...props } )=> {
    return (
        <textarea
            className={ cn(className, 'shadow-inputShadow border-none outline-[var(--primary)] py-[0.438rem] px-[0.938rem] rounded-md bg-[var(--white)]') } 
            placeholder={placeholder}
            {...props}
        />
    );
};