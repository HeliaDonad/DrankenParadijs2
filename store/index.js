import {configureStore, combineReducers } from 'redux';
import cartItems from '../reducers/cartItems';

const rootReducer = combineReducers({
  cartItems,
});

const store = configureStore(rootReducer);

export default store;
