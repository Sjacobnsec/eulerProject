// This is messy but it does work 

var myArray = [1, 2];
var i; 

for (i = 0; i < 50; i++){
    myArray.push((myArray[i + 1]) + (myArray[i]));
    if (myArray[i] % 2 !== 0) { 
        //console.log("odd");
        delete myArray[i];
    }
}

for (i = 0; i < 100; i++){   		//Deletes anything in the array larger than 4 million
     if (myArray[i] > 4000000) {
        delete (myArray[i]);
        
    }
}


var sum = myArray.reduce(function(a, b){	//sum of the array 
    return a + b;
});

console.log(myArray);
console.log(sum);
