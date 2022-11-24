import React from 'react'
import { Redirect,Route } from 'react-router-dom'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({isAdmin,component:Component, ...rest}) => {
    
  const {isAuthenticated,loading,user} =useSelector(state=>state.user)
  return (
    <Fragment>
        {loading ===false && (<Route
        {...rest}
        render={(props)=>{
            if(!isAuthenticated){
                return <Redirect to="/login" />
            }
            if(isAdmin===true && user.role !== 'admin'){
              return <Redirect to="/login" />
          }

            return <Component {...props} />
        }}
        >
        </Route>) }
    </Fragment>
    
  )
}

export default ProtectedRoute
