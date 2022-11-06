import React, { Fragment } from "react";
import CartItemCard from "./CartItemCard";
import {useSelector,useDispatch} from 'react-redux';
import { addItemsToCart,removeItemsFromCart } from "../../actions/cartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import './Cart.css'
const Cart = ({history}) => {

  const dispatch=useDispatch();
  const {cartItems}=useSelector((state)=>state.cart);

  const increaseQuantity=(id,quantity,stock)=>{
    const newQty=quantity + 1;
    if(stock<=quantity){
      return;
    }
    dispatch(addItemsToCart(id,newQty));

  }

  const decreaseQuantity=(id,quantity,stock)=>{
    const newQty=quantity - 1;
    if(quantity<2){
      return;
    }
    dispatch(addItemsToCart(id,newQty));

  }

  const deleteCartItems=(id)=>{
      dispatch(removeItemsFromCart(id));
  }


  const checkoutHandler=()=>{
    history.push("/login?redirect=shipping");
  }

  return (
  <Fragment>
    {cartItems.length === 0? (
       <div className="emptyCart md:min-h-[460px]">
       <RemoveShoppingCartIcon />

       <Typography>No Product in Your Cart</Typography>
       <Link to="/products">View Products</Link>
     </div>



    ) :(
        <Fragment>
        <div className="md:mt-16 md:mx-10 md:min-h-[620px]">
          <div className=" md:mt-16 md:h-9 font-bold bg-orange-500 rounded-sm text-white flex justify-between">
            <div className="md:mx-1">Product</div>
            <div className="ml-[320px]">Quantity</div>
            <div className="md:mx-1">Subtotal</div>
          </div>
  
          {cartItems && cartItems.map((item)=>(<div className="my-2 flex bg-slate-50 rounded-md justify-between" key={item.product}>
            <CartItemCard item={item} deleteCartItems={deleteCartItems} />
  
            <div className="flex items-center">
              <button onClick={()=>decreaseQuantity(item.product,item.quantity,item.stock)}  className="bg-slate-500 h-10 w-7">-</button>
              <input
                type="number"
                className="text-center w-9"
                value={item.quantity}
                readOnly
              />
              <button onClick={()=>increaseQuantity(item.product,item.quantity,item.stock)} className="bg-slate-500 h-10 w-7">+</button>
            </div>
  
            <div className="w-[50px] text-center flex justify-center items-center">{item.price * item.quantity}</div>
          </div>))}
  
          <div className="flex justify-between">
            <div></div>
            <div></div>
            <div className="flex flex-col md:w-[300px]">
              <div>
           
              </div>
              <div className="flex justify-between">
                <p className="text-xl font-bold">Total </p>
                <p className="w-[50px] flex justify-center">{`₹${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</p>
  
              </div>
              <div onClick={checkoutHandler} className=" text-center mt-10 h-8 cursor-pointer rounded-md bg-orange-500 hover:bg-orange-700 text-white">
                Checkout
              </div>
  
  
  
            </div>
          </div>
  
          
        </div>
      </Fragment>
    )}
  </Fragment>
  );
};

export default Cart;
