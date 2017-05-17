"use strict";

let cheese = {};
var selectedCheese = [];

let cheesePrice = {
        "cheddar": 0.5,
        "swiss": 0.5,
        "provolone": 0.5,
        "havarti": 0.5,
        "none": 0
    };

 cheese.getCheese = function(){
    var cheeseCounter = 0;
    for(var i=0;i<selectedCheese.length;i++){
        cheeseCounter += cheesePrice[selectedCheese[i]];
    }
    return cheeseCounter;
};

cheese.addCheese = function(cheese){
    if (cheese === "none"){
        selectedCheese = ["none"];
    } else {
        selectedCheese.push(cheese);
    }
};

module.exports = cheese;




