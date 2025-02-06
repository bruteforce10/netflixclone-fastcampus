require("dotenv").config();
const express = require("express");
const app = express();
const { OK, ERR } = require("./utils/response");
const { MONGO_URL, API_PORT } = process.env;
const cors = require("cors");
const routes = require("./route/index.router");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
const PORT = API_PORT;

mongoose.connect(MONGO_URL).catch((err) => {
  if (err) {
    console.log("tidak dapat terhubung ke database");
    throw err;
  }
  console.log("berhasil terhubung ke database");
});

app.use(routes);

app.get("/", (req, res) => {
  const data = {
    isRunning: true,
    serverVersion: "1.0.0",
  };
  OK(res, 200, data, "success getting data");
});

app.listen(4002, () => {
  console.log(`Server is running on port ${PORT}`);
});
