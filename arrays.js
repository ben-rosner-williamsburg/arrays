var stringArr = ["I", "am", "an", "array"];
var numberArr = [1, 2, 3, 4];
var booleanArr = [true, false, true, true];

//This method will add the strings "of" and "strings" to the end of the stringArr.
stringArr.push("of", "strings");

//This method will remove the 4 from the numberArr
numberArr.pop();

//This method will create a new array with just the first two values (true, false)
booleanArr.slice(0, 2);

/* The first index position of an array is 0. 
We then count upwards from there.  So the 2nd value 
of an array is at index 1, the third value is at index 2, etc. */
