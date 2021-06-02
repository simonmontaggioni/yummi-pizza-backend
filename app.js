const express = require("express");
const { APP_NAME } = require("./config");
const productRoutes = require("./routes/ProductRoutes");

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

// app.use("/api", (req, res, next) => {
//   res.status(200).json({ message: `Welcome to the ${APP_NAME} API.` });
// });

app.use("/api/products", productRoutes);

module.exports = app;
