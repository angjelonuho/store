import { ADD_PRODUCT_BASKET, GET_NUMBERS_CART, QUANTITY, REMOVE_PRODUCT_BASKET } from '../actions/types';
import caseImage from '../images/case.png';
import suprimeImage from '../images/suprime.png';
import watchImage from '../images/watch.png';

const initialState = {
    cartNumbers: 0,
    cartCost: 0,
    products:{
        left0:{
            src: caseImage,
            price: 4.99,
            description: 'Lizards are a widespread, raging across all continents',
            numbers: 0,
            tagName:'left0',
            inCart: false
        },
        left1:{
            src: suprimeImage,
            price: 24.99,
            description: 'Lizards are a widespread, raging across all continents',
            numbers: 0,
            tagName:'left1',
            inCart: false
        },
        right0:{
            src: watchImage,
            price: 59.99,
            description: 'Lizards are a widespread',
            numbers: 0,
            tagName:'right0',
            inCart: false
        },
        right1:{
            src: watchImage,
            price: 59.99,
            description: 'Lizards are a widespread',
            numbers: 0,
            tagName:'right1',
            inCart: false
        },
        right2:{
            src: watchImage,
            price: 59.99,
            description: 'Lizards are a widespread',
            numbers: 0,
            tagName:'right2',
            inCart: false
        },
        right3:{
            src: watchImage,
            price: 59.99,
            description: 'Lizards are a widespread',
            numbers: 0,
            tagName:'right3',
            inCart: false
        },
        right4:{
            src: watchImage,
            price: 59.99,
            description: 'Lizards are a widespread',
            numbers: 0,
            tagName:'right4',
            inCart: false
        },
        right5:{
            src: watchImage,
            price: 59.99,
            description: 'Lizards are a widespread',
            numbers: 0,
            tagName:'right5',
            inCart: false
        },

    }
}

export default (state = initialState, action) => {
    let productSelected = '';
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            productSelected = {...state.products[action.payload]};
            productSelected.numbers += 1;
            productSelected.inCart = true;

            return{
                ...state,
                cartNumbers: state.cartNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products:{
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case GET_NUMBERS_CART:

            return{
                ...state
            }
        case QUANTITY:
            productSelected = {...state.products[action.payload]};
            let totalBefore = state.cartCost -  productSelected.numbers * state.products[action.payload].price;
            productSelected.numbers =  action.qua;
            let totalAfter = (productSelected.numbers* state.products[action.payload].price);

            return{
                ...state,
                cartCost:totalBefore + totalAfter,
                products:{
                    ...state.products,
                    [action.payload]: productSelected
                }
        }
        case REMOVE_PRODUCT_BASKET: 
            productSelected = {...state.products[action.payload]};
            let numbersBackup = productSelected.numbers;
            productSelected.numbers = 0;
            productSelected.inCart = false;

            console.log(productSelected)

            return{

                ...state,
                cartCost: state.cartCost - (numbersBackup * productSelected.price),
                products: {
                    ...state.products,
                    [action.payload]: productSelected,
                }

            }
        
        default:
            return state;
    }
}