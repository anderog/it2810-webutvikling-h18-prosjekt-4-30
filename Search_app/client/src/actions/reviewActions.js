import { FETCH_REVIEWS } from "./types";

// Fetch reviews for a given productID
export const fetchReviews = productID => dispatch => {
  fetch(`/api/reviews?productID=${productID}`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_REVIEWS,
        payload: data
      })
    )
    .catch(err => {
      console.log(err);
    });
};
