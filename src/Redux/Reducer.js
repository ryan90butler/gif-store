import { combineReducers } from 'redux';
import { GET_PRODUCTS, GET_PRODUCT } from './Actions/Constraints';
let lastProduct = JSON.parse(localStorage.getItem('lastProduct')) || {};

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
const rootReducer = combineReducers({products, product});

export default rootReducer;