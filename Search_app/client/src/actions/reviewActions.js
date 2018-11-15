import { FETCH_REVIEWS, ADD_REVIEW, UPDATE_REVIEW } from "./types";

const urlPrefix =
  process.env.NODE_ENV === "production"
    ? "http://it2810-30.idi.ntnu.no:5000/api"
    : "/api";

// Fetch reviews for a given productID
export const fetchReviews = productID => dispatch => {
  fetch(`${urlPrefix}/reviews?productID=${productID}`)
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
  fetch(`${urlPrefix}/reviews/add`, {
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
  fetch(`${urlPrefix}/reviews/update`, {
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
