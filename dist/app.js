(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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
    if (cheese === "none"){
        selectedCheese = ["none"];
    } else if(cheese === ""){
        selectedCheese = ["none"];
    }else{
        selectedCheese = [cheese];
    }
};

module.exports = cheeseSelection;





},{}],3:[function(require,module,exports){
"use strict";

let condom = {};

var selectedCondom = [];

var condomPrice = {
    "mustard": 0,
    "mayo": 0,
    "avacado": 2,
    "none": 0
};
condom.getCondom = function(){
    var condomCounter = 0;
    for (var i =0;i<selectedCondom.length;i++){
        condomCounter += condomPrice[selectedCondom[i]];
    }
    return condomCounter;
};

condom.addCondom = function(condom){
    if(condom === "none"){
        selectedCondom = ["none"];
    }else{

        selectedCondom.push(condom);
    }
};


module.exports = condom;


},{}],4:[function(require,module,exports){
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































































},{"./bread.js":1,"./cheese.js":2,"./condom.js":3,"./meat.js":5,"./sandwichmaker.js":6,"./veggies.js":7}],5:[function(require,module,exports){
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



},{}],6:[function(require,module,exports){
"use strict";

var sandwichMaker = {};

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with

sandwichMaker.addTopping = function(toppingPrice) {
      totalPrice += toppingPrice;
};


sandwichMaker.getTotalPrice =  function (){
        return totalPrice;
};




module.exports = sandwichMaker;


},{}],7:[function(require,module,exports){
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




},{}]},{},[4]);
