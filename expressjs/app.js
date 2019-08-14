var Express = require('express');
var app = Express();

app.get("/", (req,res) => {
    res.send("<h1>Welcome to my website!</h1>");
});

app.get("/home", (req,res) => {
    res.send("<h1>Welcome to My Home Page!</h1>");
});

app.listen(3000, () => {
    console.log("Server is up and running!");
});