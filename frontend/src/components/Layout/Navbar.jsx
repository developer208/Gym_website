import React,{useState} from "react";
import herovid from '../../assets/images/logo.png'
import {AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

import { Link } from "react-router-dom";

const Navbar = () => {

    const [st,setSt]=useState(false);
    
    const trigger=()=>{
        setSt(!st);
    }

  return (
      <div className="flex bg-black items-center h-20 md:h-16 justify-between md:px-5 ">
        <div className="order-0 text-white w-[75px] md:w-[100px] cursor-pointer ml-2 "> <Link to="/"><img src={herovid} alt="LOGO" /></Link> </div>
        <div className="hidden md:block">
            <ul className="flex space-x-28">
                <li className=" text-[orange] text-lg  cursor-pointer hover:u"><Link to="/">Home</Link></li>
                <li className=" text-[orange] text-lg cursor-pointer hover:u"><Link to="/products">Products</Link></li>
                <li className=" text-[orange] text-lg cursor-pointer hover:u"><Link to="/search">Search</Link></li>
                <li className=" text-[orange] text-lg cursor-pointer hover:u"><Link to="/login">Login</Link></li>
                <li className=" text-[orange] text-lg cursor-pointer hover:u"><Link to="/cart"><AiOutlineShoppingCart className="" size={28}/></Link></li>
               
            </ul>
        </div>
      <div className="text-[#eba626] order-1  p-2 rounded-md cursor-pointer md:hidden">
        <button onClick={trigger} className=''>
          {st===true?<AiOutlineClose size={28}/>:<AiOutlineMenu size={28}/>}
        </button>
        
      </div>


      {/* mobile  */}
      <div className="md:hidden z-10 ">

      <div className={st===true?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}
      >
        <div className="text-white h-[80px] w-[91px] px-2  flex items-center cursor-pointer "><img src={herovid} alt="LOGO" /></div>
        <ul className="flex flex-col justify-center">
            <li className='p-4 border-b text-[orange] border-gray-600 ' onClick={trigger} ><Link to="/">Home</Link></li>
            <li className='p-4 border-b text-[orange] border-gray-600 ' onClick={trigger}><Link to="/products">Products</Link></li>
            <li className='p-4 border-b text-[orange] border-gray-600 ' onClick={trigger}><Link to="/search">Search</Link></li>
            <li className='p-4 border-b text-[orange] border-gray-600 ' onClick={trigger}><Link to="/login">Login</Link></li>
            <li className="p-5 border-b text-[orange] border-gray-600" onClick={trigger}><Link to="/cart"><AiOutlineShoppingCart className="text-[orange]" size={28}/></Link></li>
            
        </ul>

      </div>
          </div>

      
      
    </div>
  );
};

export default Navbar;
