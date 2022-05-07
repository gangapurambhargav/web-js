var express = require ("express");
var app = express();
var bodyParser = require ("body-parser");
app.set("view engine", "ejs"); //ejs engine
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


var i1=[];
app.get("/",function(req,res){
    res.render("list",{newListItem:i1});
}); //req res of list.ejs


app.post("/", function(req,res){
var i = req.body.n;
i1.push(i); //displays the n from the req and name='n' in form post
res.redirect("/"); //response previous
});

app.listen(3000, function(){
    console.log("listening on port 3000 perfectly");
}); // port number listen


// new item n is = i1 
// i1 is new item
