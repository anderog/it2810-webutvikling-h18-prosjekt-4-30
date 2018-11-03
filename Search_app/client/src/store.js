import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// The store holds the complete state tree of your app.
/*
:param reducer: A reducing function that returns the next state tree, given the current state tree and an action to handle.
:param preloadedState: The initial state
:param enhancer: The store enhancer - applyMiddleware()
*/
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;
