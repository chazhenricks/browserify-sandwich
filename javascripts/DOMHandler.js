// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.querySelectorAll("[name=bread]");
var meatChooser = document.querySelectorAll("[name=meat]");
var veggieChooser = document.querySelectorAll("[name=veggie]");
var cheeseChooser = document.querySelectorAll("[name=cheese]");
var condomChooser = document.querySelectorAll("[name=condom]");

var sandwichTotal = document.getElementById("sandwich-total");

function domWrite(){
sandwichTotal.innerHTML = "<p>The total for your sandwich is $" + finalSandwichPrice + "</p>";
}


  // A <select> element broadcasts a change event, so you listen for it
  // and get the value of the topping from your augmented IIFE

// meatChooser.addEventListener("change", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;

//   // Determine the price of the topping chosen

//   // Add the topping to the SandwichMaker to increase the total price
// });


for(var i=0;i<breadChooser.length;i++){
 breadChooser[i].addEventListener("click", function(event){
            sandwichMaker.addBread(event.target.value);
            sandwichMaker.addTopping(sandwichMaker.getBread());
            finalSandwichPrice = sandwichMaker.getTotalPrice();
            console.log("finalSandwichPrice", finalSandwichPrice);
            domWrite()
        });
}

for (var i=0;i<meatChooser.length;i++){
    meatChooser[i].addEventListener("click", function(event){
        sandwichMaker.addMeat(event.target.value, event.target.price);
        sandwichMaker.addTopping(sandwichMaker.getMeat());
        finalSandwichPrice = sandwichMaker.getTotalPrice();
        console.log("finalSandwichPrice", finalSandwichPrice);
        domWrite()
    });
}


for (var i=0;i<veggieChooser.length;i++){
    veggieChooser[i].addEventListener("click", function(event){
        sandwichMaker.addVeggies(event.target.value);
        sandwichMaker.addTopping(sandwichMaker.getVeggies());
        finalSandwichPrice = sandwichMaker.getTotalPrice();
        console.log("finalSandwichPrice", finalSandwichPrice);
        domWrite()
    });
}

for (var i=0;i<cheeseChooser.length;i++){
    cheeseChooser[i].addEventListener("click", function(event){
        sandwichMaker.addCheese(event.target.value);
        sandwichMaker.addTopping(sandwichMaker.getCheese());
        finalSandwichPrice = sandwichMaker.getTotalPrice();
        console.log("finalSandwichPrice", finalSandwichPrice);
        domWrite()
    });
}

for (var i=0;i<condomChooser.length;i++){
        condomChooser[i].addEventListener("click", function(event){
            sandwichMaker.addCondom(event.target.value);
            sandwichMaker.addTopping(sandwichMaker.getCondom());
            finalSandwichPrice = sandwichMaker.getTotalPrice();
            console.log("finalSandwichPrice", finalSandwichPrice);
            domWrite()
        });
}

















