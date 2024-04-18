const express = require('express')
const app = express()
const users = require("../routes/users");
const articles = require("../routes/articles");



app.use("/users", users);
app.use("/articles", articles);

const port = 6060
app.listen(port, console.log("Running on port " + port));