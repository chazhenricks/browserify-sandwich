"use strict";
console.log("Main Js");

let Bread = require("./bread.js"),
    sandwichMaker = require("./sandwichmaker.js"),
    Cheese = require("./cheese.js"),
    Condom = require("./condom.js"),
    Meat = require("./meat.js"),
    Veggies = require("./veggies.js");

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects

// Get a reference to the <select> element that has all the meat options

var meatChooser = $("[name='meat']");
var veggieChooser = $("[name='veggie']");
var cheeseChooser = $("[name='cheese']");
var condomChooser = $("[name='condom']");

var sandwichTotal = $("#sandwich-total");

function domWrite(){
sandwichTotal.html(`<p>The total for your sandwich is $ ${finalSandwichPrice}</p>`);
}




$("[name='bread']").click(function(event){
    Bread.addBread(event.target.value);
    sandwichMaker.addTopping(Bread.getBread());
    finalSandwichPrice = sandwichMaker.getTotalPrice();
    console.log("finalSandwichPrice", finalSandwichPrice);
});


cheeseChooser.on("click", function(event){
    var checkedCheese = $("[name='cheese']:checked");
    Cheese.addCheese(checkedCheese.val());
    sandwichMaker.addTopping(Cheese.getCheese());
    finalSandwichPrice = sandwichMaker.getTotalPrice();
    console.log("finalSandwichPrice", finalSandwichPrice);
});

meatChooser.on("click", function(event){
    Meat.addMeat(event.target.value);
    sandwichMaker.addTopping(Meat.getMeat());
    finalSandwichPrice = sandwichMaker.getTotalPrice();
    console.log("finalSandwichPrice", finalSandwichPrice);

});

veggieChooser.on("click", function(event){
    Veggies.addVeggies(event.target.value);
    sandwichMaker.addTopping(Veggies.getVeggies());
    finalSandwichPrice = sandwichMaker.getTotalPrice();
    console.log("finalSandwichPrice", finalSandwichPrice);

});

condomChooser.on("click", function(event){
    Condom.addCondom(event.target.value);
    sandwichMaker.addTopping(Condom.getCondom());
    finalSandwichPrice = sandwichMaker.getTotalPrice();
    console.log("finalSandwichPrice", finalSandwichPrice);

});






























































