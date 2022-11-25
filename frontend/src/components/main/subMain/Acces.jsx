import React, { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAProduct,clearErrors } from "../../../actions/productAction";
import Loader from "../../Layout/Loader";
import Product from "../../product/Product";
import Pagination from "react-js-pagination";
import "./productsA.css";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";


const Acces = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const category=["accessories",""];

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 60000]);
  const [ratings, setRatings] = useState(0);

  const { product, loading, resultperpage,error, productsCount } = useSelector(
    (state) => state.products
  );

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getAProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price,alert, ratings,error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="mt-[69px] md:mt-10">
            <div className="text-2xl font-bold  flex justify-center md:text-4xl ">
              Accessories
            </div>
            <hr class="my-4 h-[2px] mx-10 md:mx-[400px] bg-black" />

           
           
           
            <div className="flex md:mt-5">
              <div className="mx-2 md:mx-5   md:w-[300px]">
                <h1 className="font-bold text-2xl text-center">Filters</h1>
                <Typography>Price</Typography>
                <Slider
                  value={price}
                  onChange={priceHandler}
                  aria-labelledby="range-slider"
                  valueLabelDisplay="auto"
                  min={0}
                  max={60000}
                />

                <fieldset>
                  <Typography component="legend">Ratings Above</Typography>
                  <Slider
                    value={ratings}
                    onChange={(e, newRating) => {
                      setRatings(newRating);
                    }}
                    aria-labelledby="continuous-slider"
                    valueLabelDisplay="auto"
                    min={0}
                    max={5}
                  />
                </fieldset>
              </div>

              <div className="flex overflow-scroll scrollbar-hide ml-4  space-x-5 md:flex-wrap md:justify-center md:space-x-5">
                {product &&
                  product.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
              </div>
            </div>

            {resultperpage < productsCount && (
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultperpage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Acces;
