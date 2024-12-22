const express = require("express");
const app = express();
const { OK, ERR } = require("./utils/response");
const cors = require("cors");

const PORT = 3002;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const data = {
    isRunning: true,
    serverVersion: "1.0.0",
  };
  OK(res, 200, data, "success getting data");
});

app.get("/my-movies", (req, res) => {
  OK(
    res,
    200,
    [
      {
        id: 1,
        title: "Movie 1",
      },
    ],
    "success getting data"
  );
});

app.post("/my-movies", (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(201).json({
    message: "Success",
  });
});

app.delete("/my-movies/:id/:token", (req, res) => {
  const { id, token } = req.params;
  console.log(id, token);
  res.status(204).json({
    message: "Delete Success",
  });
});

app.post("/token", (req, res) => {
  console.log("creating user token to database");
  const data = req.body;
  console.log(data);
  res.status(201).json({
    message: "Success",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
