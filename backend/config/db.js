const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Database Successfully");
    } catch (error) {
        console.log(`Error occured: ${error.message}`);
    }
}

module.exports = connectDB;