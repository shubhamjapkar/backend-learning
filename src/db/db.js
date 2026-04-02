const mongoose = require("mongoose");

async function connectDb() {
    await mongoose.connect(process.env.MONGODB_URI).then(() => console.log("hey i'm connected to DB"))
}

module.exports = connectDb;