import { FETCH_PRODUCTS } from "../actions/types";

const initialState = {
  items: [],
  loading: true
};

// Evaluate the type
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        totalPages: action.pages
      };
    default:
      return state;
  }
}
