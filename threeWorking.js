// find the largest prime factor of  
// 600851475143

/*var triTop = 600851475143;
var myArray = [];

for (i = 0; i < 72; i++) {

    //console.log(consult);
    if (i % 2 === 0) {
        //that number is not a prime 
        console.log(i + " " + "That number is not a prime");
    } else {
        var consult = (triTop / i);
        myArray.push(consult);
    }
}

//console.log(consult);
console.log(myArray); */

var num = 600851475143;
i = 0; 

for (i = 0; i <= 1000; i++) {
    if (num % i === 0) {
        console.log(i);
        console.log("yay");
    } 
}
