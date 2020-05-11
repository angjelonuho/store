import { ADD_PRODUCT_BASKET } from './types';

export const addToCart = (productName) =>{

    return(dispatch) => {
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: productName
        });
    }
}