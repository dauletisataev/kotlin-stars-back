import cron from "node-cron";
import fetchingData from "./fetch";
import fs from "fs";
import express from "express";

cron.schedule("0 0 0 * * *", () => {
  console.log(`scheduler run`);
  fetchingData().then(saveRecord);
});

function saveRecord(star) {
    let rawdata = fs.readFileSync('stars.json');
    let stars = JSON.parse(rawdata);
    stars.push(star);
    let updated_stars = JSON.stringify(stars);
    fs.writeFileSync('stars.json', updated_stars);
};


const app = express();
const port = 8080;

app.get('/kotlin/stars', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let rawdata = fs.readFileSync('stars.json');
    res.end(rawdata);
});

app.listen(port);
