module.exports.check = (x) => {
    if(x%2 == 0){
        console.log(x + " is an even number");
        return true;
    }
    else{
        console.log(x + " is an odd number");
        return false;
    }

}