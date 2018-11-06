import { FETCH_PRODUCTS } from './types';

// Fetch products from given api URL
export const fetchProducts = () => dispatch => {
  fetch('/api/products')
    .then(res => res.json())
    .then(data => dispatch(
      {
        type: FETCH_PRODUCTS,
        payload: data.docs
      }
    ))
    .catch(err => {
      console.log(err);
    });
};
