const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = 'workout'
const collections = ['exercises'];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

app.listen(3000, () => {
    console.log("App running on port 3000!");
});