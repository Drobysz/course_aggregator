import { DetailedHTMLProps, FC, HTMLAttributes, } from "react";

interface ServiceIconProps extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement>{
    fill?: string;
    key?: number;
    className?: string;
};

const ServiceIcon: FC<ServiceIconProps> = ({fill="#787D85", className='none', ...props})=>{
    return (
        <svg className={className} {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6537 8.76156C19.7086 8.47062 19.7363 8.17386 19.7363 7.875C19.7363 5.18678 17.4891 3 14.7266 3C12.9631 3 11.3286 3.91408 10.4306 5.36661C9.21834 4.9842 7.97459 5.14818 6.94992 5.8353C5.92526 6.52188 5.3137 7.60893 5.26423 8.79753C3.9172 9.42012 3 10.7457 3 12.2083C3 12.4622 3.0632 12.7098 3.11155 12.9499L3.11211 12.9505C3.47199 14.7178 5.07939 16 6.93359 16H18.0664C20.2147 16 22 14.2988 22 12.2083C22 10.7299 21.0703 9.39896 19.6537 8.76156Z" fill={fill}/>
        </svg>

    );
};

export default ServiceIcon;