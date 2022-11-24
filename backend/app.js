const express= require("express");
const cookieParser=require("cookie-parser");
const bodyParser=require('body-parser');
const fileUpload=require("express-fileupload");
const cors =require("cors")
const app= express();

app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true,parameterLimit:100000,limit:"50mb"}));
app.use(fileUpload());

const product=require("./routes/productRoute");
const user=require("./routes/userRoute");
const order=require("./routes/orderRoute");
const payment=require("./routes/paymentRoute");


app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);




const errorMiddleware=require("./middleware/error");

//middlware for Error
app.use(errorMiddleware);


module.exports = app;