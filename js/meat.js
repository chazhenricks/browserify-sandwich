"use strict";


let meat = {};
var selectedMeat = [];

var meatPrice = {
    "ham": 2,
    "turkey": 2,
    "salami": 2,
    "bologna": 1,
    "chicken": 1.5,
    "none": 0
};


meat.getMeat = function(){
    var meatCounter = 0;
    for(var i =0; i<selectedMeat.length;i++){
        meatCounter += meatPrice[selectedMeat[i]];
    }
    return meatCounter;
};

meat.addMeat = function(meat){
    if (meat === "none"){
        selectedMeat = ["none"];
    }else {
        selectedMeat.push(meat);

    }
};

module.exports = meat;


