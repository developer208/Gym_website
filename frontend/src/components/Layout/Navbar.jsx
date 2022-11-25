import React, { useState } from "react";
// import herovid from '../../assets/images/logo.png'
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [st, setSt] = useState(false);

  const trigger = () => {
    setSt(!st);
  };

  return (
    <div className="flex bg-black items-center h-20 md:h-[90px] justify-between md:px-5 ">
      <div className="order-0 hover:text-[green] text-white w-[75px] md:w-[100px] cursor-pointer ml-2 ">
        {" "}
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dqyvomyqy/image/upload/v1669051839/GymWebsite/logo_white_ix0vtn.png"
            alt="LOGO"
          ></img>
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex space-x-28">
          <li className=" hover:text-[#3ef03e]  text-white text-lg  cursor-pointer hover:u">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:text-[#3ef03e]  text-white text-lg cursor-pointer hover:u">
            <Link to="/products">Products</Link>
          </li>
          <li className=" hover:text-[#3ef03e]  text-white text-lg cursor-pointer hover:u">
            <Link to="/search">Search</Link>
          </li>
          <li className=" hover:text-[#3ef03e]  text-white text-lg cursor-pointer hover:u">
            <Link to="/login">Login</Link>
          </li>
          <li className=" hover:text-[#3ef03e]  text-white text-lg cursor-pointer hover:u">
            <Link to="/cart">
              <AiOutlineShoppingCart className="" size={28} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-white order-1 mr-3 p-2 rounded-md cursor-pointer md:hidden">
        <button onClick={trigger} className="">
          {st === true ? (
            <AiOutlineClose size={28} />
          ) : (
            <AiOutlineMenu size={28} />
          )}
        </button>
      </div>

      {/* mobile  */}
      <div className="md:hidden z-10 ">
        <div
          className={
            st === true
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <div className="text-white h-[80px] w-[91px] px-2  flex items-center cursor-pointer ">
            LOGO
          </div>
          <ul className="flex flex-col justify-center">
            <li
              className="p-4 border-b hover:text-[#3ef03e] text-white border-gray-600 "
              onClick={trigger}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="p-4 border-b hover:text-[#3ef03e] text-white border-gray-600 "
              onClick={trigger}
            >
              <Link to="/products">Products</Link>
            </li>
            <li
              className="p-4 border-b hover:text-[#3ef03e] text-white border-gray-600 "
              onClick={trigger}
            >
              <Link to="/search">Search</Link>
            </li>
            <li
              className="p-4 border-b hover:text-[#3ef03e] text-white border-gray-600 "
              onClick={trigger}
            >
              <Link to="/login">Login</Link>
            </li>
            <li
              className="p-5 border-b hover:text-[#3ef03e] text-white border-gray-600"
              onClick={trigger}
            >
              <Link to="/cart">
                <AiOutlineShoppingCart className="text-white" size={28} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
