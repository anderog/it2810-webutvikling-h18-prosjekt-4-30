import { FETCH_REVIEWS, ADD_REVIEW, UPDATE_REVIEW } from "./types";

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

export const addReview = ratingItem => dispatch => {
  fetch("api/reviews/add", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(ratingItem)
  })
    .then(res => res.json())
    .then(review =>
      dispatch({
        type: ADD_REVIEW,
        payload: review
      })
    )
    .catch(err => {
      console.log(err);
    });
};

export const updateReview = ratingItem => dispatch => {
  fetch("api/reviews/update", {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(ratingItem)
  })
    .then(res => res.json())
    .then(review =>
      dispatch({
        type: UPDATE_REVIEW,
        payload: review
      })
    )
    .catch(err => {
      console.log(err);
    });
};
