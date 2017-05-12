"use strict";


var sandwichMaker = function(oldSandwich){
    var breadPrice = {
        "white": 0.75,
        "wheat": 0.75,
        "rye": 0.75,
        "pumpernickle": 1.00,
    };
    var selectedBread = "";
        oldSandwich.getBread = function(){
                return breadPrice[selectedBread];
        };

        oldSandwich.addBread = function(bread){
                selectedBread = bread;
        };

        return oldSandwich;
}(sandwichMaker);





