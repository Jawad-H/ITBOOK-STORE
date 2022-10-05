const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        subtitle: { type: String },
        isbn13: { type: String, required: true },
        image: { type: String, required: true },
        categories: { type: Array },
        price: { type: Number, required: true },
        discount: { type: String },
        inStock: { type: Boolean, default: true },
        status: { type: String }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
