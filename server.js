const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes");
const pages = require("./src/pages");
require('dotenv').config();

const app = express();
connectDB();

app.get("/", (req, res) => res.send("API Running"));

//define routes

app.use(pages);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

