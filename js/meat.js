"use strict";

var sandwichMaker = function(oldSandwich){
    var meatPrice = {
        "ham": 2,
        "turkey": 2,
        "salami": 2,
        "bologna": 1,
        "chicken": 1.5,
        "none": 0
    };


    var selectedMeat = [];
        oldSandwich.getMeat = function(){
            var meatCounter = 0;
            for(var i =0; i<selectedMeat.length;i++){
                meatCounter += meatPrice[selectedMeat[i]];
            }
            return meatCounter;
        };

        oldSandwich.addMeat = function(meat){
            if (meat === "none"){
                selectedMeat = ["none"];
            }else {
                selectedMeat.push(meat);

            }
        };

        return oldSandwich;
}(sandwichMaker);

