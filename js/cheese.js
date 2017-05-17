"use strict";

let cheeseSelection = {};
var selectedCheese = [];

let cheesePrice = {
        "cheddar": 0.5,
        "swiss": 0.5,
        "provolone": 0.5,
        "havarti": 0.5,
        "none": 0
    };

 cheeseSelection.getCheese = function(){
    var cheeseCounter = 0;
    for(var i=0;i<selectedCheese.length;i++){

        cheeseCounter += cheesePrice[selectedCheese[i]];
    }
    return cheeseCounter;
};

cheeseSelection.addCheese = function(cheese){

    var index = selectedCheese.indexOf(cheese);
    if (index === -1 && cheese === "none") {
      selectedCheese = ["none"];
    } else if (index === -1) {
      selectedCheese.push(cheese);
    } else {
        selectedCheese.splice(index, 1);
    }
  };

module.exports = cheeseSelection;




