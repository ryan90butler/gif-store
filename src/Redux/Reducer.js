import { combineReducers } from 'redux';
import { GET_PRODUCTS } from './Actions/Constraints';

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

const rootReducer = combineReducers({products});

export default rootReducer;