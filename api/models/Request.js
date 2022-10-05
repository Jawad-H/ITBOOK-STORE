const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        author: { type: String, required: true },
        isbn: { type: String, required: true },
        name: { type: String, required: true },
        contact: { type: String, required: true },
        email: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Request", RequestSchema);
