import { PAGE_INCREMENT, PAGE_DECREMENT, PAGE_RESET } from "../actions/types";

const initialState = {
  page: 1
};

// Evaluate the type
export default function(state = initialState, action) {
  switch (action.type) {
    case PAGE_INCREMENT:
      return {
        page: state.page + 1
      };
    case PAGE_DECREMENT:
      return {
        page: state.page - 1
      };
    case PAGE_RESET:
      return {
        page: 1
      };
    default:
      return state;
  }
}
