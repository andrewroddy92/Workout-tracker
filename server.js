const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes/api")

//-------------- EXPRESS SERVER ---------------

const PORT = process.env.PORT || 3000;
const app = express();

//-------------- LOGGER ---------------

app.use(logger("dev"));

//--------------  REQ/RES handlers ---------------

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//--------------  MONGO DB ---------------

const databaseUrl = 'workouts'
const collections = ['workouts'];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts",   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

//-------------- ROUTE ---------------

app.use(routes)

//-------------- RUN ---------------

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});