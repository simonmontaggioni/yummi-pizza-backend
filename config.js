const dotenv = require("dotenv").config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  APP_NAME: process.env.APP_NAME || "my app",
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
};
