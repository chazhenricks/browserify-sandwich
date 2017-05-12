var sandwichMaker = function(oldSandwich){
    var condomPrice = {
        "mustard": 0,
        "mayo": 0,
        "avacado": 2,
        "none": 0
    };
    var selectedCondom = [];
        oldSandwich.getCondom = function(){
            var condomCounter = 0;
            for (var i =0;i<selectedCondom.length;i++){
                condomCounter += condomPrice[selectedCondom[i]];
            }
            return condomCounter;
        },
        oldSandwich.addCondom = function(condom){
            if(condom === "none"){
                selectedCondom = ["none"];
            }else{

                selectedCondom.push(condom);
            }

        }

        return oldSandwich;
}(sandwichMaker);


