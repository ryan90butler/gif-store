import {GET_PRODUCTS, GET_PRODUCT} from '../Actions/Constraints';
import axios from 'axios';

export function getProducts(){
  const payload = axios.get('/api/items');
  return {
    type: GET_PRODUCTS,
    payload
  }
}

export function getProduct(item){
  localStorage.setItem("lastProduct", JSON.stringify(item));
  return {
    type: GET_PRODUCT,
    payload: item
  }
}