import React,{Fragment,useEffect} from 'react'
import Sidebar from './Sidebar'
import './css/dashboard.css'
import { Link } from 'react-router-dom'
// import { Doughnut, Line } from "react-chartjs-2";
import { getAdminProduct } from '../../actions/productAction'
import { useSelector, useDispatch } from "react-redux";
import { Typography } from '@material-ui/core'

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  let outOfStock = 0;
  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

    useEffect(() => {
      dispatch(getAdminProduct());
    }, [dispatch]);

  return (
  <Fragment>
    <Sidebar/>

    <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹2000
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>50</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>5</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>2</p>
            </Link>
          </div>
        </div>

     
      </div>
  </Fragment>
  )
}

export default Dashboard
