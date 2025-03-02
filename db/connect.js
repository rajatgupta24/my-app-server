const mongoose = require("mongoose");
const uri = process.env.MONGO_URL;

const connect = (callback) => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("MongoDB connected");
      callback;
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
    });
};

module.exports = connect;
