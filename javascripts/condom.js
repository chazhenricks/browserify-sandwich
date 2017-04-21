var sandwichMaker = function(oldSandwich){
    var selectedCondom = [];
        oldSandwich.getCondom = function(){
                return selectedCondom;
        },
        oldSandwich.addCondom = function(condom){
                selectedCondom.push(condom);
        }

        return oldSandwich;
}(sandwichMaker);


