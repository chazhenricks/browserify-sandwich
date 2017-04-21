var sandwichMaker = function(oldSandwich){
    var selectedVeggies= [];
        oldSandwich.getVeggies = function(){
                return selectedVeggies;
        },
        oldSandwich.addVeggies = function(veggies){
                selectedVeggies.push(veggies);
        }

        return oldSandwich;
}(sandwichMaker);


