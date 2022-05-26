const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");
const path = require("path");

const app = express();

/** Install request logger */
app.use(morgan("dev"));

/** Install JSON request parser */
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

/** Install Router */
app.use(router);

module.exports = app;
