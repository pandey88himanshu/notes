const express = require("express");
const app = express();
require("dotenv").config;
const db = require("./connection/db");
const router = require("./routes/routes");
const cors = require("cors");
app.use(express.json());
app.use(cors());
db.connect();

app.use("/api/v1", router);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
