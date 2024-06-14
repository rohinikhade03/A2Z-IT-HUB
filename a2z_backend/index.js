var express = require("express");
var bodyparser = require("body-parser");
var upload = require("express-fileupload");
var session = require("express-session");

var admin_route = require("./routes/admin_route");


var app = express();
//npm i cors
//CROSS ORIGIN RESOURCE SHARING This is imp to get data from different websites
var cors = require("cors");
app.use(cors());

app.use(bodyparser.urlencoded({extended:true}));
app.use(upload());
app.use(session({
    secret:"secret",
    resave:true,
    saveUninitialized:true
    }));

app.use(express.static("public/")); //for public folder access

app.use("/admin",admin_route);

app.listen(1000); 

//npm i express
//npm init
//npm i ejs
//npm i mysql
//npm i express-filupload
//npm i express-session
//npm i cors