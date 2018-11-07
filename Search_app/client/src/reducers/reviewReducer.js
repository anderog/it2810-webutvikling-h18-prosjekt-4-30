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
        reviewItem: action.payload
      };
    case UPDATE_REVIEW:
      return {
        ...state
      };
    default:
      return state;
  }
}
