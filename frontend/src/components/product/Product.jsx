// import { Link } from 'react-router-dom'
import { Fragment } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: Window.innerwidth < 600 ? 20 : 25,
    value: product.ratings,
  };

  return (
    <Fragment>
      <Link to={`/product/${product._id}`}>
        <div
          className="bg-slate-100 rounded-md  w-[280px] h-[450px] hover:border-orange-500 flex flex-col justify-center items-center
        hover:font-bold  my-5 b border-black"
        >
          <div className="w-[220px] mb-4">
            <img src={product.images[0].url} className="" alt="" />
          </div>
          <div className="flex flex-col">
            <div className="">
              <p className="text-black w-[150px]   text-xl  ">{product.name}</p>
            </div>
            <div className="flex  space-x-2 my-2">
              <div className="">
                <ReactStars {...options} />
              </div>

              <span className="mt-2">({product.numOfReviews} Reviews)</span>
            </div>
            <span className="">₹{product.price}</span>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default Product;
