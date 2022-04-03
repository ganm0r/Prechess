const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorhandler");

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalrouter"));

app.use(errorHandler);

app.listen(port, () => console.log(`[server] listening on port ${port}...`));