import { combineReducers } from "redux";
import productReducer from "./productReducer";
import pageReducer from "./pageReducer";
import reviewReducer from "./reviewReducer";
import categoryReducer from "./categoryReducer";
import { reducer as formReducer } from "redux-form";

// Turns an object into a single reducing function you can pass to createStore
export default combineReducers({
  products: productReducer,
  form: formReducer,
  page: pageReducer,
  reviews: reviewReducer,
  endpoint: categoryReducer
});
