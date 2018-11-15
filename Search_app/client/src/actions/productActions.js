import { FETCH_PRODUCTS } from "./types";

const urlPrefix =
  process.env.NODE_ENV === "production"
    ? "http://it2810-30.idi.ntnu.no:5000/api"
    : "/api";

// Fetch products from given api URL
export const fetchProducts = () => (dispatch, getState) => {
  const search =
    getState().form.searchValue &&
    getState().form.searchValue.values &&
    getState().form.searchValue.values.search;
  const endpoint = getState().endpoint.type;
  fetch(
    `${urlPrefix}/products?Varetype=${endpoint}&&search=${search || ""}&&page=${
      getState().page.page
    }&&orderBy=${getState().order.orderBy}&&order=${getState().order.order}`
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: data.docs,
        pages: data.pages
      })
    )
    .catch(err => {
      console.log(err);
    });
};
