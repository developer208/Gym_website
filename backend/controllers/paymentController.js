const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const Instance = new Razorpay({

    // Replace with your key_id
    key_id: "rzp_test_hbxnohxbTMWBYf",
    

    // Replace with your key_secret
    key_secret: "dBlemI1DKtRVnvXfFNUAXAHH"
});



exports.checkout = catchAsyncErrors(async (req, res, next) => {

    var options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    const order = await Instance.orders.create(options);
   


    res.status(200).json({
        success: true,
        order,

    })



});


exports.paymentVerification = catchAsyncErrors(async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;

        // console.log(req.body);
        res.redirect(
            // `${req.protocol}://${req.get("host")}/success`
            "http://localhost:3000/success"
          );
 

});

exports.getKey = catchAsyncErrors(async (req, res, next) => {



    res.status(200).json({
        key: "rzp_test_hbxnohxbTMWBYf"

    })



});