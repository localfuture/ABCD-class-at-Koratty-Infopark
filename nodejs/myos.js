const myos = require('os');

var userdata = myos.userInfo();

var platform = myos.platform();


console.log(userdata.username+ " uses "+ platform); 
