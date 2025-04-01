export const priceDecorator = ( price: number | undefined ) => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};