var sandwichMaker = function(oldSandwich){
    var selectedCheese = [];
        oldSandwich.getCheese = function(){
                return selectedCheese;
        },
        oldSandwich.addCheese = function(cheese){
                selectedCheese.push(cheese);
        }

        return oldSandwich;
}(sandwichMaker);



