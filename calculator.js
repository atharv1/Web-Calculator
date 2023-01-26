const express = require('express');

const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var total = num1 + num2;
    res.send("Your total is: " + String(total));
});


app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html")
});

app.post("/bmicalculator",function(req,res){
  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);
  var result = w / (h*h);
  res.send("Your BMI is "+ String(result));
})


app.listen(3000,()=>{
    console.log("Running on Port 3000");
});
