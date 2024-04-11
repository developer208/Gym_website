const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please Enter product Name"]
        },
        description: {
            type: String,
            required: [true, "Please Enter product Description"]
        },
        price: {
            type: Number,
            required: [true, "Please Enter product Price"],
            maxLength: [8, "price cannot exceed 8 characters"]

        },
        ratings: {
            type: Number,
            default: 0

        },
        images: [
            {
                public_id: {
                    type: String,
                    default: "xyz",
                    required: true
                },
                url: {
                    type: String,
                    default: "xyz",
                    required: true
                }
            }
        ],
        category: {
            type: String,
            required: [true, "Please Enter product Category"],

        },
        stock: {
            type: Number,
            required: [true, "Please Enter product Stock"],
            maxLength: [4, "stock cannot excced 4 characters"],
            default: 1
        },
        numOfReviews: {
            type: Number,
            default: 0

        },
        reviews: [
            {
                user: {
                    type: mongoose.Schema.ObjectId,
                    ref: "User",
                    required: true
                },



                name: {
                    type: String,
                    required: true
                },
                rating: {
                    type: Number,
                    required: true
                },
                comment: {
                    type: String,
                    required: true
                }
            }
        ],

        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true


        },
        createAt: {
            type: Date,
            default: Date.now
        }


    });
module.exports = mongoose.model("Product", productSchema);
