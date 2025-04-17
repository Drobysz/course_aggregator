// Animation
import { motion } from "framer-motion";

// Props
import { ReactNode, FC, DetailedHTMLProps, HTMLAttributes} from "react";

interface SmoothAppearenceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    state?: boolean;
    children: ReactNode;
    className: string;
};

export const SmoothAppearence: FC<SmoothAppearenceProps> = ({children, state=true, className})=> {

    return(
        <motion.div
            className={className}
            initial={{ height: 0, opacity: 0 }}
            animate={ state ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    )
};