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


  // A <select> element broadcasts a change event, so you listen for it
  // and get the value of the topping from your augmented IIFE

// meatChooser.addEventListener("change", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;

//   // Determine the price of the topping chosen

//   // Add the topping to the SandwichMaker to increase the total price
// });



$("[name='bread']").click(function(event){
    Bread.addBread(event.target.value);
    sandwichMaker.addTopping(Bread.getBread());
    finalSandwichPrice = sandwichMaker.getTotalPrice();
    console.log("finalSandwichPrice", finalSandwichPrice);
});


cheeseChooser.on("click", function(event){
    Cheese.addCheese(event.target.value);
    sandwichMaker.addTopping(Cheese.getCheese());
    finalSandwichPrice = sandwichMaker.getTotalPrice();
    console.log("finalSandwichPrice", finalSandwichPrice);
});

meatChooser.on("click", function(event){
    Meat.addMeat(event.target.value);
});




// for (var i=0;i<meatChooser.length;i++){
//     meatChooser[i].addEventListener("click", function(event){
//         sandwichMaker.addMeat(event.target.value, event.target.price);
//         sandwigchMaker.addTopping(sandwichMaker.getMeat());
//         finalSandwichPrice = sandwichMaker.getTotalPrice();
//         console.log("finalSandwichPrice", finalSandwichPrice);
//         domWrite();
//     });
// }




































// for (var i=0;i<veggieChooser.length;i++){
//     veggieChooser[i].addEventListener("click", function(event){
//         sandwichMaker.addVeggies(event.target.value);
//         sandwichMaker.addTopping(sandwichMaker.getVeggies());
//         finalSandwichPrice = sandwichMaker.getTotalPrice();
//         console.log("finalSandwichPrice", finalSandwichPrice);
//         domWrite();
//     });
// }



// for (var i=0;i<condomChooser.length;i++){
//         condomChooser[i].addEventListener("click", function(event){
//             sandwichMaker.addCondom(event.target.value);
//             sandwichMaker.addTopping(sandwichMaker.getCondom());
//             finalSandwichPrice = sandwichMaker.getTotalPrice();
//             console.log("finalSandwichPrice", finalSandwichPrice);
//             domWrite();
//         });
// }

















