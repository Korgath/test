(function(){
   if(window.Worker) {
    var myWorker = new Worker("Worker.js");
    var message = {
        yolo: "hej",
        swag: "med dig"        
    };
    
    myWorker.postMessage(message);
    
    myWorker.onmessage = function (e) {
        var element = document.getElementsByClassName("worker");
        console.log(e.data);
        element[0].innerHTML = e.data;
    };
   } 
})();


var arrayOfNumbers = [2,4,6,7,8,9,10,12,14,13];
console.log(arrayOfNumbers);
function doMassiveStuff(arrayOfNumbers, callback) {
    for(var i = 0; i < arrayOfNumbers.length; i++) {
        console.log(arrayOfNumbers[i + 1]);
        if(arrayOfNumbers[i] === 10) {
            callback(arrayOfNumbers[i]);
            break;
        } 
    }
}

doMassiveStuff(arrayOfNumbers, whatever);

function whatever(numberTen){
    var array = [numberTen];
    
    for(var i = 0; i < 5; i++){
        array.push(numberTen + i + 1);
    }
    console.log(array);
}


