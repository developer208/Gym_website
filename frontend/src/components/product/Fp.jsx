import React,{useEffect} from "react";
import Product from "./Product";
import { getProduct } from '../../actions/productAction';
import {useDispatch,useSelector} from 'react-redux'
import {useAlert}  from 'react-alert'


const Fp = () => {

  const dispatch=useDispatch();
  const alert=useAlert();
  const {error,product}= useSelector(state=>state.products)

  useEffect(()=>{
    if (error) {
      return alert.error(error);
      
    }
    dispatch(getProduct())
  },[dispatch,error,alert]);

  
  return (
    <div className="flex flex-col my-5">
      <div className="text-2xl  flex justify-center md:text-6xl ">
        Featured Products
      </div>
      <hr class="my-4 h-[2px] mx-10 md:mx-56 bg-black"/>

      <div className="flex overflow-scroll scrollbar-hide space-x-5 md:flex-wrap md:justify-center md:space-x-5 mx-5 md:mx-[100px]">
        {product && product.map(product=>
             <Product product={product} />
        ) }
        

      </div>
    </div>
  );
};

export default Fp;
