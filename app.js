const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.use(express.static(__dirname + "/public"), (_, res, next) => {
    res.status(404)
    res.sendFile(__dirname + "/404.html")
  });

app.listen(8081, function(){
    console.log("Servidor rodando em http://localhost:8081");
})