var myArray = [1, 2];

for (i = 0; i < 10; i++){
    myArray.push((myArray[i + 1]) + (myArray[i]));
	if (myArray[i] % 2 !== 0) {
		console.log("Odd");
		delete myArray[i];
	} 
}


console.log(myArray);

