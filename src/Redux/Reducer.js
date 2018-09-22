import { combineReducers } from 'redux';
import { GET_PRODUCTS, GET_PRODUCT, ADD_TO_BASKET } from './Actions/Constraints';
let lastProduct = JSON.parse(localStorage.getItem('lastProduct')) || {};

function basket (state = 0, action){
    switch(action.type){
        case `${ADD_TO_BASKET}_PENDING` :
            return state;
        case `${ADD_TO_BASKET}_FULFILLED` :
            return state = action.payload.count;
        case `${ADD_TO_BASKET}_REJECTED` :
            return state;
        // case `${DELETE_FROM_BASKET}_PENDING` :
        //     return state;
        // case `${DELETE_FROM_BASKET}_FULFILLED` :
        //     return state = action.payload.count;
        // case `${DELETE_FROM_BASKET}_REJECTED` :
        //     return state;
        // case `${GET_BASKET_COUNT}_PENDING` :
        //     return state;
        // case `${GET_BASKET_COUNT}_FULFILLED` :
        //     return state = action.payload.count;
        // case `${GET_BASKET_COUNT}_REJECTED` :
        //     return state;
        default:
            return state;
    }
}

function products (state =[], action){
	switch(action.type){
        case `${GET_PRODUCTS}_PENDING`:
            return state;
        case `${GET_PRODUCTS}_FULFILLED`:
            return state = action.payload.data;
        case `${GET_PRODUCTS}_REJECTED`:
            return [`It didn't work`];
        default:
            return state;
    }
}

function product (state = lastProduct, action){
    switch(action.type){
        case GET_PRODUCT :
           return  state = action.payload
        default:
            return state;
    }
}
const rootReducer = combineReducers({products, basket, product});

export default rootReducer;