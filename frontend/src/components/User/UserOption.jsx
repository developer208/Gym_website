import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/images/Profile.png";
import { MdDashboardCustomize } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaThList } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../../actions/userAction";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useAlert } from "react-alert";

const UserOption = ({ user }) => {
  const [st, setSt] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const history = useHistory();
  const alert=useAlert();
  const trigger = () => {
    setSt(!st);
  };
  const dispatch = useDispatch();

  function dashboard() {
    history.push("/admin/dashboard");
  }

  function orders() {
    history.push("/orders");
  }
  function account() {
    history.push("/account");
  }
  function cart() {
    history.push("/cart");
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  return (
    <Fragment>
      <div className="flex flex-row md:h-[40px] h-11 space-x-2 top-[84px] md:right-1 right-1 md:top-[94px] absolute z-10">
        <button
          onClick={trigger}
          className=" bg-black hover:text-[#3ef03e] text-white flex justify-center rounded-sm cursor-pointer items-center font-bold w-[60px]"
        >
          <RiAccountCircleFill size={28} />{" "}
        </button>
      </div>
      <div
        className={
          st === true
            ? "md:right-[250px] right-[229px] top-[141px] md:top-[135px] absolute ease-in-out duration-500 "
            : "right-[-250px] overflow-hidden absolute"
        }
      >
        <div className="md:w-[250px] md:h-[420px] absolute z-10 ">
          <div className="bg-neutral-200 text-black rounded overflow-hidden shadow-lg">
            <div className="text-center p-6  border-b">
              <img
                className="h-24 w-24 rounded-full mx-auto"
                src={user.avatar.url ? user.avatar.url : profile}
                alt="Randy Robertson"
              />
              <p className="pt-2 text-lg  font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
              <div className="mt-5">
                <Link to="/" className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700">
                  Manage your Account
                </Link>
              </div>
            </div>
            <div className=" flex flex-col space-y-4">
              <div className="flex space-x-2 w-full items-center justify-center">
                <div>{<MdDashboardCustomize size={20} />}</div>

                <div
                  onClick={() => {
                    trigger();
                    dashboard();
                  }}
                  className="cursor-pointer hover:font-bold"
                >
                  Dashboard
                </div>
              </div>
              <div className="flex space-x-2 w-full items-center justify-center">
                <div className="">{<FaThList />}</div>

                <div
                  onClick={() => {
                    trigger();
                    orders();
                  }}
                  className="cursor-pointer hover:font-bold"
                >
                  Orders
                </div>
              </div>
              <div className="flex space-x-2 w-full items-center justify-center">
                <div>{<ImProfile size={20} />}</div>

                <div
                  onClick={() => {
                    trigger();
                    account();
                  }}
                  className="cursor-pointer hover:font-bold"
                >
                  Profile
                </div>
              </div>

              <div
                onClick={() => {
                  trigger();
                  cart();
                }}
                className="flex space-x-2 w-full justify-center"
              >
                <div className="cursor-pointer ">
                  <ShoppingCartIcon size={20}  style={{ color: cartItems.length > 0 ? "green" : "black" }} />
                  <span className="text-[green]">{cartItems.length}</span>

                </div>
              </div>

              <div
                onClick={() => {
                  trigger();
                  logoutUser();
                }}
                className="flex space-x-2 w-full justify-center"
              >
                <div className="cursor-pointer ">{<FiLogOut size={20} />}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserOption;
