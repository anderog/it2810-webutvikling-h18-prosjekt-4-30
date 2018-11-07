import { combineReducers } from "redux";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";

// Turns an object into a single reducing function you can pass to createStore
export default combineReducers({
  products: productReducer,
  reviews: reviewReducer
});
