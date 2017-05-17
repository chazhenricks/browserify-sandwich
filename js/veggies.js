"use strict";


let veggies = {};

var selectedVeggies= [];


var veggiePrice = {
    "lettuce": 0.25,
    "tomato": 0.25,
    "peppers": 0.25,
    "onions": 0.25,
    "none": 0
};
veggies.getVeggies = function(){
    var veggieCounter = 0;
    for (var i=0;i<selectedVeggies.length;i++){
        veggieCounter += veggiePrice[selectedVeggies[i]];
    }

    return veggieCounter;
};

veggies.addVeggies = function(veggies){
    if (veggies === "none"){
        selectedVeggies = ["none"];
    } else {
        selectedVeggies.push(veggies);
    }
};

module.exports = veggies;


