//installing dependancies
const express = require("express");
const cors = require("cors");

//import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

//create our app object
const app = express();

//set up middleware
app.use(cors());

//create home route to test our app
app.get("/", (req, res)=> {
    res.send("Hell World");
})

//create a /projects route to retrieve our projects
app.get("/projects", (req, res)=>{
    res.json(projects);
})

//create a /about route to retrieve our about info
app.get("/about", (req, res)=>{
    res.json(about);
})

//declare a variable for our port number
const PORT = process.env.PORT || 1337;

//setup our server listener
app.listen(PORT, () => console.log(`Message from port ${PORT}: I aM sOoO 1337`))