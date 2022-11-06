const express=require("express");
const { checkout, paymentVerification, getKey } = require("../controllers/paymentController");


 const router=express.Router();

 router.route("/checkout").post(checkout);
 router.route("/getkey").get(getKey);
 router.route("/paymentverification").post(paymentVerification);
 module.exports = router

