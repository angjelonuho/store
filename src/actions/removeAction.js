import {REMOVE_PRODUCT_BASKET} from './types';

export const removeProduct = (name) => {

    return (dispatch) => {

        dispatch({
            type:  REMOVE_PRODUCT_BASKET,
            payload: name
        });

    }
}