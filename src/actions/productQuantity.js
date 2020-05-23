import {QUANTITY} from './types';

export const productQuantity = (action, name) => {
    return (dispatch) => {

        dispatch({
            type:  QUANTITY,
            qua: action,
            payload: name,
        })

    }
}