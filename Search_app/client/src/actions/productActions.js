import { FETCH_PRODUCTS } from "./types";

// Fetch products from given api URL
export const fetchProducts = () => (dispatch, getState) => {
  var url = "/api/products";
  const search =
    getState().form.searchValue &&
    getState().form.searchValue.values &&
    getState().form.searchValue.values.search;
  if (search) {
    url = url + "?search=" + search;
  }

  const maxprice =
    getState().form.searchValue &&
    getState().form.searchValue.values &&
    getState().form.searchValue.values.price;
  if (maxprice) {
    url = url + "&price=" + maxprice;
  }
  console.log(maxprice);
  console.log(search);
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: data
      })
    )
    .catch(err => {
      console.log(err);
    });
};
