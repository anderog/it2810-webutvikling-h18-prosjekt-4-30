import { POST_REVIEW, FETCH_REVIEWS } from "../actions/types";

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
    case POST_REVIEW:
      return {
        ...state,
        reviewList: action
      };
    default:
      return state;
  }
}
