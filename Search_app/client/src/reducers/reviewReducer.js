import { UPDATE_REVIEW, ADD_REVIEW, FETCH_REVIEWS } from "../actions/types";

const initialState = {
  reviewItems: []
};

// Evaluate the type
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_REVIEWS:
      return {
        ...state,
        reviewItems: state.reviewItems.concat(action.payload)
      };
    case ADD_REVIEW:
      return {
        ...state,
        reviewItems: state.reviewItems.concat(action.payload)
      };
    case UPDATE_REVIEW:
      let updatedReviews = state.reviewItems.map(
        reviewItem =>
          reviewItem.productID === action.payload.productID
            ? { ...reviewItem, reviews: action.payload.reviews }
            : reviewItem
      );
      return {
        ...state,
        reviewItems: updatedReviews
      };
    default:
      return state;
  }
}
