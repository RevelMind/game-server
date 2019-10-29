// HTTP Server

var express = require("express");
var app = express();
var up = true;
var data = {
    x: 0,
    y: 0
};

app.get("/updatePos", (req, res) => {
    res.json(data);
});

app.get("/setPos/:x/:y", (req, res) =>  {
    data.x = parseInt(req.params.x);
    data.y = parseInt(req.params.y);
    res.status(200);
    res.json({data: "Hello, world!"});
});

app.listen(8080, () => {
    console.log("Hosted server at localhost:8080");
});