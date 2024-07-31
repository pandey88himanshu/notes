const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGO_URL;
exports.connect = () => {
  try {
    mongoose.connect(url).then(() => {
      console.log("DataBase Connected Successfully");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
