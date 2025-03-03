const express = require("express");
const connectDB = require("./src/config/database");

const app = express();

connectDB()
  .then(() => {
    console.log("successfully connected to databse !!...");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Database connot be connected !!", error);
  });
