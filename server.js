const express = require("express");
const connectDB = require('./config/db');
require('dotenv').config();


const app = express();
connectDB();

app.get("/", (req, res) => res.send("API Running"));

//define routes

app.use('/API/user', require('./routes/API/user'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

