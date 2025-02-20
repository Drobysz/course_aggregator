import { ReactNode } from "react";

export default interface Htagprops {
    children: ReactNode;
    appearence: 'primary' | 'ghost';
}