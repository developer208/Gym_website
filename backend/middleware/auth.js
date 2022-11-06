const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt=require("jsonwebtoken");
const User = require("../models/userModel");

exports. isAuthenticatedUser= catchAsyncError(async(req,res,next)=>{
    const {token}=req.cookies;
   
    if(!token){
        return next(new ErrorHandler("please Login to access this resource",401));
    }

    const decodeedData= jwt.verify(token,process.env.JWT_SECRET);

    
    req.user=await User.findById(decodeedData.id);

    next();


});


exports.authorizeRoles=(...roles)=>{


    return(req,res,next)=>{

        if(!roles.includes(req.user.role)){
            return next(
                new ErrorHandler(`Role : ${req.user.role} is not allow access this resource `,403)
            );
           

        }

        next();

    }
}
