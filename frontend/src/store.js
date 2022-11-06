import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer, productDetailsReducer, newReviewReducer, newProductReducer } from "./Reducers/productReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "./Reducers/userReducer";
import { cartReducer } from "./Reducers/cartReducer";
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from "./Reducers/orderReducer";



const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder:newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    newReview:newReviewReducer,
    newProduct:newProductReducer
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    }
};

const middleware = [thunk];

const store = createStore(
    reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))

);
export default store;