"use strict";


let bread = {};
var selectedBread = "";

let breadPrice = {
    "white": 0.75,
    "wheat": 0.75,
    "rye": 0.75,
    "pumpernickle": 1.00,
};

bread.getBread = function(){
        return breadPrice[selectedBread];
};

bread.addBread = function(bread){
        selectedBread = bread;
};






module.exports = bread;
