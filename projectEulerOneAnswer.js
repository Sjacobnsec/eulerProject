var alpha = (3);
var beta = (0);

var myArray = [];

while (beta * alpha < 1000){
    
     if (alpha * beta%5 === 0) {
        console.log("double");
        
    }
    else {
        myArray.push(alpha * beta);
    }
    beta++;
}
 
var sum = myArray.reduce(function(a, b) {
  return a + b;
});

var omega = (5);
var tri = (0);

var myArrayDos = [];

while (omega * tri < 1000){
    
    myArrayDos.push(omega * tri);
    tri++;
}

var sumDos = myArrayDos.reduce(function(a, b) {
  return a + b;
});
//console.log(myArray);
//console.log(myArrayDos);
console.log(sum);
console.log(sumDos);
console.log(sumDos + sum);