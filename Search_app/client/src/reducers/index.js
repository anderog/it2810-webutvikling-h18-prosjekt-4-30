import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import productReducer from "./productReducer";
import pageReducer from "./pageReducer";

// Turns an object into a single reducing function you can pass to createStore
export default combineReducers({
  products: productReducer,
  form: formReducer,
  page: pageReducer
});
