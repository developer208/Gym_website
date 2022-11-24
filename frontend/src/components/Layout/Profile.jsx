import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from './Loader'
import { useEffect } from 'react'

const Profile = ({history}) => {

    const {user,loading,isAuthenticated}=useSelector(state=>state.user);
    
    useEffect(()=>{
      if(isAuthenticated === false){
        history.push("/login")
      }

    },[history,isAuthenticated])

  return (
   <Fragment>
    {loading ?<Loader/>:(<Fragment> <div className='flex md:flex-row  flex-wrap mt-[70px]  justify-center'>
      <div className=' flex flex-col space-y-4 items-center  w-[500px] '>
        <div className='mb-5 text-3xl font-bold'>My Profile</div>
        <div className='md:w-[200px] md:h-[200px] rounded-full flex justify-center items-center  bg-slate-50 '> <img  src={user.avatar.url} alt={user.name} /> </div>
        <div className="text-white  bg-[#2d4a59] hover:bg-[#467890] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer"> <Link to="/me/update">Edit Profile</Link> </div>
      </div>

      <div className='w-[400px] flex flex-col md:mt-8'>
        <div className='my-10'>
          <h4 className='font-bold'> Name</h4>
          <p>{user.name}</p>

        </div>
        <div className='my-10'>
          <h4 className=' font-bold'>Email</h4>
          <p>{user.email}</p>
        </div>
        <div className='my-10'>
          <h4>Joined On</h4>
          <p>{String(user.createdAt).substr(0,10)}</p>

        </div>
        <div className='my-10 md:mx-0 mx-10 text-white'>
          <div className=' flex justify-center items-center cursor-pointer  md:text-xl my-3 bg-slate-800 rounded-md hover:bg-slate-900 md:h-10 h-12'> <Link to="/orders">Orders</Link> </div>
          <div className=' flex justify-center items-center cursor-pointer  md:text-xl my-3 bg-slate-800 rounded-md hover:bg-slate-900 md:h-10 h-12'> <Link className='' to="/password/update">Change Password</Link></div>
        </div>
      </div>
      
    </div>
     </Fragment>)}
   </Fragment>
  )
}

export default Profile
