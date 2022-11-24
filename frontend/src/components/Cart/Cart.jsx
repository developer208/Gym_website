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
        <div className=" mt-16 mx-1 md:mt-16 md:mx-10 overflow-hidden">
          <div className=" md:mt-16 hidden md:visible  md:h-9 font-bold bg-[#15212b] rounded-sm text-white md:flex justify-between">
            <div className="md:mx-1">Product</div>
            <div className="ml-[320px]">Quantity</div>
            <div className="md:mx-1">Subtotal</div>
          </div>
          <div className="md:hidden visible h-10px w-full flex justify-between bg-black text-white ">
            <div>Product</div>
            <div>Quanity</div>
            <div>SubTotal</div>


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
                <p className="text-lg font-bold">Total </p>
                <p className="w-[50px] flex items-center justify-center">{`₹${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</p>
  
              </div>
              <div onClick={checkoutHandler} className=" text-center my-10 h-8 cursor-pointer rounded-md bg-[#0059d0] hover:bg-[#3877e5] text-white">
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
