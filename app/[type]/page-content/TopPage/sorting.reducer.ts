import { SortEnum } from "@/app/components/Sorting/SortingProps"
import { ProductModel } from "@/app/interfaces/product.interface";

export type SortingActions = { type: SortEnum };

export interface SortingReducerState {
    sort: SortEnum,
    products: ProductModel[]
};

export const sortReducer = ( state: SortingReducerState, action: SortingActions )=> {
    switch (action.type) {
        case SortEnum.Rating:
            
            return {
                sort: SortEnum.Rating,
                products:
                    Array.isArray(state.products)
                    ?
                    state.products.sort( (a, b)=> a.initialRating > b.initialRating ? -1 : 1 )
                    :
                    []
            };

        case SortEnum.Price:
             
            return {
                sort: SortEnum.Price, 
                products:
                    Array.isArray(state.products)
                    ?
                    state.products.sort( (a, b)=> a.price > b.price ? -1 : 1 )
                    :
                    []
            };
    
        default:
            throw new Error('Incorrect sorting type' );
    };
};