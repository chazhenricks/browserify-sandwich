var sandwichMaker = function(oldSandwich){
    var selectedMeat = [];
        oldSandwich.getMeat = function(){
                return selectedMeat;
        },
        oldSandwich.addMeat = function(meat, price){
                var meatObject = {meat:price};
                selectedMeat.push(meatObject);
        }

        return oldSandwich;
}(sandwichMaker);

