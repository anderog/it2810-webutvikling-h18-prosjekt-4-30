import { FETCH_PRODUCTS } from "./types";

// Fetch products from given api URL
export const fetchProducts = () => (dispatch, getState) => {
  const search =
    getState().form.searchValue &&
    getState().form.searchValue.values &&
    getState().form.searchValue.values.search;
  fetch(`/api/products?search=${search || ""}`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: data.docs
      })
    )
    .catch(err => {
      console.log(err);
    });
};