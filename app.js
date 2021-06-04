const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const {
  APP_NAME,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
} = require("./config");
const productRoutes = require("./routes/ProductRoutes");

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas");
    console.error(error);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/products", productRoutes);
app.use("/api", (req, res, next) => {
  res.status(200).json({ message: `Welcome to the ${APP_NAME} API.` });
});

module.exports = app;
