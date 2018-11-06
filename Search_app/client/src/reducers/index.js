import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import productReducer from "./productReducer";

// Turns an object into a single reducing function you can pass to createStore
export default combineReducers({
  products: productReducer,
  form: formReducer
});
