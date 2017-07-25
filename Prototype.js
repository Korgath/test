var x = function(fruit) {
    this.favoriteFruit = fruit;
}

x.prototype.getFruit = function(succes) {
    if(this.favoriteFruit === "banana"){
        succes(this.favoriteFruit);
    } else {
        console.log("lalla");
    }
}

var x1 = new x("banana");
var x2 = new x("apple");
var x3 = new x("orange");

x1.getFruit(success);
x2.getFruit(success);
x3.getFruit(success);

function success(f){
    console.log("This is the fruit: " + f)
}