import React,{Fragment,useEffect} from 'react'
import Sidebar from './Sidebar'
import './css/dashboard.css'
import { Link } from 'react-router-dom'
// import { Doughnut, Line } from "react-chartjs-2";
import { getAdminProduct } from '../../actions/productAction'
import { useSelector, useDispatch } from "react-redux";
import { Typography } from '@material-ui/core'
import { getAllOrders } from '../../actions/orderAction'
import { getAllUsers } from '../../actions/userAction'



const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);

  // let outOfStock = 0;
  // products &&
  //   products.forEach((item) => {
  //     if (item.Stock === 0) {
  //       outOfStock += 1;
  //     }
  //   });

 

    useEffect(() => {
      dispatch(getAdminProduct());
      dispatch(getAllOrders());
      dispatch(getAllUsers());

    }, [dispatch]);

  return (
  <Fragment>
<div className='flex flex-wrap'>
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
          <p>{products && products.length}</p>
        </Link>
        <Link to="/admin/orders">
          <p>Orders</p>
          <p>{orders && orders.length}</p>
        </Link>
        <Link to="/admin/users">
          <p>Users</p>
          <p>{users && users.length}</p>
        </Link>
      </div>
    </div>

 
  </div>
</div>
  </Fragment>
  )
}

export default Dashboard
