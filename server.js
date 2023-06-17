const express = require("express");
const { json, urlencoded } = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

import initRoutes from "./src/routes";
import dbConnect from "./src/config/dbconnect";

const app = express();

app.use(
  cors({
    origin: process.env.URL_SERVER,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));

dbConnect();
initRoutes(app);

const PORT = process.env.PORT || 3000;

const listener = app.listen(PORT, () => {
  console.log(`Server is running on port ${listener.address().port}`);
});
