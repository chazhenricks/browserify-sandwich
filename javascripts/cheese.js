var sandwichMaker = function(oldSandwich){
    var cheesePrice = {
        "cheddar": .5,
        "swiss": .5,
        "provolone": .5,
        "havarti": .5,
        "none": 0
    }
    var selectedCheese = [];
        oldSandwich.getCheese = function(){
            var cheeseCounter = 0;
            for(var i=0;i<selectedCheese.length;i++){
                cheeseCounter += cheesePrice[selectedCheese[i]];
            }
            return cheeseCounter;
        },
        oldSandwich.addCheese = function(cheese){
            if (cheese === "none"){
                selectedCheese = ["none"];
            } else {
                selectedCheese.push(cheese);
            }
        }

        return oldSandwich;
}(sandwichMaker);



