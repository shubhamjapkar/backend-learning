const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title: String,
    description: String
})

module.exports = mongoose.model("user", userSchema)