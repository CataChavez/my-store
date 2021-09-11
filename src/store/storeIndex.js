import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

export const storeIndex = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));