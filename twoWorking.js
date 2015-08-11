var myArray = [1, 2];

/* The for loop creates the i variable and the fib sequence relies on it
this creates problems when I change the termination variable to anything other than 
a 10 */

for (i = 0; i < 10; i++){
    myArray.push((myArray[i + 1]) + (myArray[i])); //fib sequence 
	if (myArray[i] % 2 !== 0) {
		console.log("Odd");
		delete myArray[i];
	} 
}

var sum = myArray.reduce(function(a, b) {
	return a + b;
});

console.log(sum);
console.log(myArray);

