var Express = require('express');
var app = Express();

app.set('view engine','ejs');

app.get("/", (req,res) => {
    res.render('index',{title:"ICTK", name:["Anand","Abhinav","Vivek","Alwin","Dileep"]}); 
});

app.get("/home", (req,res) => {
   res.render('home',{title:"ICTK Home Page"});
});

app.get("/contact", (req,res) => {
    res.render('contact');
 });

app.listen(3000, () => {
    console.log("Server is up and running!");
});