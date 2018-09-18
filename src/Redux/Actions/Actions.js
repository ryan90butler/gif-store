import {GET_PRODUCTS} from '../Actions/Constraints';
import axios from 'axios';

export function getProducts(){
  const payload = axios.get('/api/items');
  return {
    type: GET_PRODUCTS,
    payload
  }
}