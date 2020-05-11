import { ADD_PRODUCT_BASKET, GET_NUMBERS_CART } from '../actions/types';

const initialState = {
    cartNumbers: 0,
    cartCost: 0,
    products:{
        left0:{
 
            price: 4.99,
            description: 'Lizards are a widespread, raging across all continents',
            numbers: 0,
            inCart: false
        },
        left1:{
 
            price: 24.99,
            description: 'Lizards are a widespread, raging across all continents',
            numbers: 0,
            
            inCart: false
        },
        right0:{
 
            price: 24.99,
            description: 'Lizards are a widespread',
            numbers: 0,
            
            inCart: false
        },
        right1:{
 
            price: 24.99,
            description: 'Lizards are a widespread',
            numbers: 0,
            
            inCart: false
        },
        right2:{
 
            price: 24.99,
            description: 'Lizards are a widespread',
            numbers: 0,
            
            inCart: false
        },
        right3:{
 
            price: 24.99,
            description: 'Lizards are a widespread',
            numbers: 0,
            
            inCart: false
        },
        right4:{
 
            price: 24.99,
            description: 'Lizards are a widespread',
            numbers: 0,
            
            inCart: false
        },
        right5:{
 
            price: 24.99,
            description: 'Lizards are a widespread',
            numbers: 0,
            
            inCart: false
        },

    }
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            let addQuantity = {...state.products[action.payload]}
            addQuantity.numbers += 1;
            addQuantity.inCart = true;

            return{
                ...state,
                cartNumbers: state.cartNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products:{
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
        case GET_NUMBERS_CART:
            return{
                ...state
            }
        default:
            return state;
    }
}