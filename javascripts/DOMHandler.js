// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("bread");
var meatChooser = document.querySelectorAll("[name=meat]");
var veggieChooser = document.querySelectorAll("[name=veggie]");
var cheeseChooser = document.getElementById("cheese");
var condomChooser = document.querySelectorAll("[name=condom]");



  // A <select> element broadcasts a change event, so you listen for it
  // and get the value of the topping from your augmented IIFE

// meatChooser.addEventListener("change", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;

//   // Determine the price of the topping chosen

//   // Add the topping to the SandwichMaker to increase the total price
// });



 breadChooser.addEventListener("change", function(event){
            sandwichMaker.addBread(event.target.value);
            console.log("selectedBread", sandwichMaker.getBread());
        });

for (var i=0;i<meatChooser.length;i++){
    meatChooser[i].addEventListener("change", function(event){
        sandwichMaker.addMeat(event.target.value, event.target.price);
        //console.log("selectedMeats", sandwichMaker.getMeat());
        console.log("meatprice", event.target["data-price"])
    });
}


for (var i=0;i<veggieChooser.length;i++){
    veggieChooser[i].addEventListener("change", function(event){
        sandwichMaker.addVeggies(event.target.value);
        console.log("selectedVeggie", sandwichMaker.getVeggies());
    });
}


cheeseChooser.addEventListener("change", function(event){
    selectedCheese = event.target.value;
    console.log("selectedCheese", selectedCheese);
});

for (var i=0;i<condomChooser.length;i++){
        condomChooser[i].addEventListener("change", function(event){
            sandwichMaker.addCondom(event.target.value);
            console.log("selectedCondom", sandwichMaker.getCondom());
        });
}


















