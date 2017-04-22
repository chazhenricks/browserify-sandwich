var sandwichMaker = function(oldSandwich){
    var veggiePrice = {
        "lettuce": .25,
        "tomato": .25,
        "peppers": .25,
        "onions": .25,
        "none": 0
    }
    var selectedVeggies= [];
        oldSandwich.getVeggies = function(){
            var veggieCounter = 0;
            for (var i=0;i<selectedVeggies.length;i++){
                veggieCounter += veggiePrice[selectedVeggies[i]];
            }

            return veggieCounter;
        },
        oldSandwich.addVeggies = function(veggies){
            if (veggies === "none"){
                selectedVeggies = ["none"];
            } else {
                selectedVeggies.push(veggies);
            }
        }
        return oldSandwich;
}(sandwichMaker);


