import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { createOrder } from "../../actions/orderAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const OrderSuccess = () => {
  const dispatch=useDispatch();
  const data=sessionStorage;
  const obj=Object.keys(data);

  useEffect(()=>{
    const info=data.getItem(obj[0]);
    dispatch(createOrder(info));
  },[data]);

  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
