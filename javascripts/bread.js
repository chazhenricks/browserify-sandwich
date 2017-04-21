var sandwichMaker = function(oldSandwich){
    var selectedBread = "";
        oldSandwich.getBread = function(){
                return selectedBread;
        },
        oldSandwich.addBread = function(bread){
                selectedBread = bread;
        }
        return oldSandwich;
}(sandwichMaker);





