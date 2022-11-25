
import React from 'react';

import Navbar from './components/Layout/Navbar';
import { Route, Switch } from 'react-router-dom';

import Main from './components/main/Main';
import ProductDetails from './components/product/productDetail/ProductDetails';
import LoginSignup from './components/User/LoginSignup';
import { useEffect } from 'react';
import store from '../src/store'
import { loadUser } from './actions/userAction';
import Products from './components/product/Products';
import Search from './components/Layout/Search';
import UserOption from './components/User/UserOption';
import { useSelector } from 'react-redux';
import Profile from './components/Layout/Profile';
// import Loader from './components/Layout/Loader';
import ProtectedRoute from './components/Route/ProtectedRoute';
import UpdateProfile from './components/Layout/UpdateProfile';
import UpdatePassword from './components/Layout/UpdatePassword';
import ForgotPassword from './components/Layout/ForgotPassword';
import ResetPassword from './components/Layout/ResetPassword';
import Cart from './components/Cart/Cart';
import Footer from './components/Layout/Footer';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import OrderSuccess from './components/Cart/OrderSuccess';
import PayVerify from './components/Cart/PayVerify';
import MyOrders from './components/Cart/MyOrders';
import orderDetails from './components/Cart/Orderdetails';
import Dashboard from './components/admin/Dashboard';
import ProductList from './components/admin/ProductList';
import NewProduct from './components/admin/NewProduct';
import UpdateProduct from './components/admin/UpdateProduct';
import OrderList from './components/admin/OrderList';
import ProcessOrder from './components/admin/ProcessOrder';
import UsersList from './components/admin/UsersList';
import UpdateUser from './components/admin/UpdateUser';
import ProductReviews from './components/admin/ProductReviews';
import Equip from './components/main/subMain/Equip';
import Suppli from './components/main/subMain/Suppli';
import Acces from './components/main/subMain/Acces';
import AboutUs from './components/About/AboutUs';






function App() {



  const { user, isAuthenticated } = useSelector(state => state.user)

  useEffect(() => {
    store.dispatch(loadUser())
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());


  return (
    <div >

      <Navbar />

      {isAuthenticated && <UserOption user={user} />}
      <Switch>


        <Route exact path='/' component={Main} />
        <Route exact path='/product/:id' component={ProductDetails} />
        <Route exact path='/login' component={LoginSignup} />
        <Route exact path='/products' component={Products} />
        <Route path='/products/:keyword' component={Products} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/equipment' component={Equip} />
        <Route exact path='/supplements' component={Suppli} />
        <Route exact path='/accessories' component={Acces} />
        <ProtectedRoute exact path='/account' component={Profile} />
        <ProtectedRoute exact path='/me/update' component={UpdateProfile} />
        <ProtectedRoute exact path='/password/update' component={UpdatePassword} />
        <Route exact path='/password/forgot' component={ForgotPassword} />
        <Route exact path='/password/reset/:token' component={ResetPassword} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/about' component={AboutUs} />
        <ProtectedRoute exact path='/shipping' component={Shipping} />
        <Route exact path='/success' component={OrderSuccess} />
        <ProtectedRoute exact path='/orders' component={MyOrders} />
        <Route exact path='/order/confirm' component={ConfirmOrder} />
        <ProtectedRoute exact path='/paymentverification' component={PayVerify} />
        <ProtectedRoute exact path='/order/:id' component={orderDetails} />
        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />


        {/* ADMIN  */}
        <ProtectedRoute isAdmin={true} exact path='/admin/dashboard' component={Dashboard} />
        <ProtectedRoute isAdmin={true} exact path='/admin/products' component={ProductList} />
        <ProtectedRoute isAdmin={true} exact path='/admin/product' component={NewProduct} />
        <ProtectedRoute exact path='/admin/orders' component={OrderList} />
        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
         <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />
          <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />
           <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />


      </Switch>
      <Footer />

    </div>




  );
}

export default App;
