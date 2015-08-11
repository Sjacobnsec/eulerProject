// find the largest prime factor of  
// 600851475143

var triTop = 600851475143;
var myArray = [];

for (i = 0; i < 72; i++) {
    var consult = (triTop / i);
    //console.log(consult);
    if (consult % consult === 0) {
        myArray.push(consult); 
    }
}

//console.log(consult);
console.log(myArray);
