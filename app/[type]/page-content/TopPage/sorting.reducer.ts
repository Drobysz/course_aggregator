import { SortEnum } from "@/components/Sorting/SortingProps"
import { ProductModel } from "@/interfaces/product.interface";

export type SortingActions = 
| { type: SortEnum.Rating }
| { type: SortEnum.Price }
| { type: 'SET_PRODUCTS'; payload: ProductModel[] };

export interface SortingReducerState {
    sort: SortEnum,
    products: ProductModel[]
};

export const sortReducer = ( state: SortingReducerState, action: SortingActions )=> {
    switch (action.type) {
        case SortEnum.Rating:
            
            return {
                sort: SortEnum.Rating,
                products: [...state.products].sort( (a, b)=> a.initialRating > b.initialRating ? -1 : 1 )

            };

        case SortEnum.Price:
             
            return {
                sort: SortEnum.Price, 
                products: [...state.products].sort( (a, b)=> a.price > b.price ? -1 : 1 )
            };

        case 'SET_PRODUCTS':

            return{
                ...state,
                products: action.payload
            };
    
        default:
            throw new Error('Incorrect sorting type' );
    };
};