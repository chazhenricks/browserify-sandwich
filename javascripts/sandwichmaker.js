var sandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    },
    getTotalPrice: function (){
        return totalPrice;
    }
  };
})();



console.log("sandwichMaker", sandwichMaker)

