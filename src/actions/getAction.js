import { GET_NUMBERS_CART } from './types';

export const getNumbers = () => {
    return(dispatch) => {
        console.log('getting ');
        dispatch({
            type: GET_NUMBERS_CART
        });
    }
}