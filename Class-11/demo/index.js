"use strict"; // Reading task

const express = require("express");
const uniData = require("./data.json"); // improting data from json file and save it in a variable
const cors = require("cors");   

const app = express();

//middlewares
app.use(cors());  // who can touch the server 

//routes

// let arr = [
//   {
//     country: "Jordan",
//     alpha_two_code: "JO",
//     name: "Al al-Bayt University",
//     "state-province": null,
//     domains: ["aabu.edu.jo"],
//     web_pages: ["http://www.aabu.edu.jo/"],
//   },
//   {
//     country: "Jordan",
//     alpha_two_code: "JO",
//     name: "Al Hussein Bin Talal University",
//     "state-province": null,
//     domains: ["ahu.edu.jo"],
//     web_pages: ["http://www.ahu.edu.jo/"],
//   },
//   {
//     country: "Jordan",
//     alpha_two_code: "JO",
//     name: "Al-Zaytoonah University",
//     "state-province": null,
//     domains: ["alzaytoonah.edu.jo"],
//     web_pages: ["http://www.alzaytoonah.edu.jo/"],
//   },
//   {
//     country: "Jordan",
//     alpha_two_code: "JO",
//     name: "Al-Ahliyya Amman University",
//     "state-province": null,
//     domains: ["ammanu.edu.jo"],
//     web_pages: ["http://www.ammanu.edu.jo/"],
//   },
//   {
//     country: "Jordan",
//     alpha_two_code: "JO",
//     name: "Applied Science University",
//     "state-province": null,
//     domains: ["asu.edu.jo"],
//     web_pages: ["http://www.asu.edu.jo/"],
//   },
//   {
//     country: "Jordan",
//     alpha_two_code: "JO",
//     name: "Al-Balqa Applied University",
//     "state-province": null,
//     domains: ["bau.edu.jo"],
//     web_pages: ["http://www.bau.edu.jo/"],
//   },
//   {
//     country: "Jordan",
//     alpha_two_code: "JO",
//     name: "Yarmouk University",
//     "state-province": null,
//     domains: ["yu.edu.jo"],
//     web_pages: ["http://www.yu.edu.jo/"],
//   },
//   {
//     country: "Jordan",
//     alpha_two_code: "JO",
//     name: "Zarka Private University",
//     "state-province": null,
//     domains: ["zpu.edu.jo"],
//     web_pages: ["http://www.zpu.edu.jo/"],
//   },
// ];



//Routes

// localhost:3000/home
app.get("/", handleHome);

// localhost:3000/test
app.get("/allinfo", handleAll);

// localhost:3000/allnames
app.get("/allnames", handleAllNames);

// localhost:3000/any other routes
app.get("*", handleNotFoud);


//Handlers Functions

function handleHome(req, res) {
  console.log("user trying to reach home ");
  res.send(" welcome to our server");
}

function handleAll(req, res) {
  res.send(uniData);
}

function handleNotFoud(req, res) {
  res.send({
    code: 404,
    message: "Not Found",
    extra: "you can visit only home, allinfo and allnames routes ",
  });
}

function handleAllNames(req, res) {
  let newArr = [];
  for (let i = 0; i < uniData.length; i++) {
    newArr.push(uniData[i].name);
  }
  res.send(newArr);
}


// Starting the server handler

app.listen(3000, startingLog);

function startingLog(req, res) {
  console.log("Running at 3000");
}
