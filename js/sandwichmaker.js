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

