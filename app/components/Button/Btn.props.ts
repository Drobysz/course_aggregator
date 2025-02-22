import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export default interface BtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearence: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none'
}