import {combineReducers,applyMiddleware} from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllPizzaReducer } from './Reducers/pizzaReducer';
import { cartReducer } from './Reducers/cartReducer';
import { registerUserReducer } from './Reducers/userReducer';
import { loginUserReducer } from './Reducers/userReducer';
import {placeOrderReducer} from './Reducers/orderReducer'


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): [];
const currentUser = localStorage.getItem("currentUser")
? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer
});
const initialState = {
    cartReducer : {
        cartItems : cartItems
    },

    loginUserReducer:{
        currentUser:currentUser
    }
};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;