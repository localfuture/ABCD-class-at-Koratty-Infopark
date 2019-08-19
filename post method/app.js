const express =require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=> {
    res.render("home");
});

app.post("/post",(req,res)=>{
    res.render("post",{body:req.body});
});



app.listen(3000, () =>{
    console.log("server is up");
});