// Props
import { MenuItem } from "@/interfaces/menu.interface";

export const priceDecorator = ( price: number | undefined ) => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const buildResults = (menu: MenuItem[], query: string): MenuItem[] => {
    
    return menu.map( c => ({
        ...c,
        pages: c.pages.filter( sc => sc.title.includes(query) )
    })).filter( c => c.pages.length > 0 );
};