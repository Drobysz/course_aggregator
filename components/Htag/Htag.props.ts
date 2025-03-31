import { ReactNode } from "react";

export default interface Htagprops {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode
}