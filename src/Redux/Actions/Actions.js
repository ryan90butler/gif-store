import {GET_PRODUCTS, GET_PRODUCT, ADD_TO_BASKET} from '../Actions/Constraints';
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

export function addToBasket(productId){
  const payload = axios.post(`/api/basket`, { productId })
      .then(({ data }) => data)
  return {
      type: ADD_TO_BASKET,
      payload
  }
}