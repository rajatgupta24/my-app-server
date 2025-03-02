const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

const auth = require("./routes/routes");
const connect = require("./db/connect");

app.use("/api/auth", auth);

const PORT = process.env.PORT || 5000;
connect(app.listen(PORT, () => console.log(`Server running on port ${PORT}`)));
