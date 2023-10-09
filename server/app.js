require("dotenv").config();
require("express-async-errors");
const express = require("express");
const textToSpeechRouter = require("./routes/text-to-speech");
const handleErrors = require("./middleware/error-handler");
const routeNotExist = require("./middleware/route-not-existing");
const path = require("path");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./uploads")));

// Routes
app.use("/api/synthesize", textToSpeechRouter);

app.use(routeNotExist);
app.use(handleErrors);

const HTTP_PORT = process.env.HTTP_PORT || 3000;

app.listen(HTTP_PORT, () => {
  console.log(`Http server is running on port ${HTTP_PORT}`);
});
