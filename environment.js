// All this code is used to make it possible for backend to function using data from .env.development

// This code represents the string that we see
const path = require("path");

const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "./.env." + ENV);

require("dotenv").config({ path: PATH });

module.exports = ENV;
