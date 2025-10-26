// Core Imports
const cookieParser = require("cookie-parser");
const { checkForAuthentication, restrictTo } = require("./middlewares/auth.js");
const path = require("path");

// Routes
const urlRoute = require("./routes/url.js");
const staticRoute = require("./routes/staticRouter.js");
const userRoute = require("./routes/user.js");

// App Initialization
const express = require("express");
const app = express();

// Environment Setup
require("dotenv").config();
const PORT = process.env.PORT || 8001;

// Database connection
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");

connectToMongoDB(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb connected!");
  })
  .catch((e) => {
    console.log(e);
  });

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication); //() dont use this because it is a middleware

// Route Mounting
app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute); //ejs route
app.use("/public", express.static(path.resolve("./public"))); //static files route

// Server Startup
app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
