
// String fra DOM
//let team = document.querySelector("#teamname").textContent;

// Create an string - with your team-name! (preferably not more than 10 characters)
let teamString = `TeamDubbiHansi`;

//Convert it into an array
let arr = Array.from ( teamString );


//Create a for-loop that iterates through the array, and writes each letter to the console
let i;
for (i = 0; i < arr.length; i++) {
   // console.log(`"String",${arr}`);
   // console.log(arr[i]);
//Replace the inner part of the for-loop with a call to that function
   writeLetter(arr[6]);
};

//Now, below the for-loop, create a .forEach that iterates through the array of letters, and calls writeLetter for each one.
arr.forEach(writeLetter);


// Now create a function for writing a single letter to the console - name it writeLetter, and call it with a single parameter for the letter to write
function writeLetter(letter){
    console.log(letter);
};


//Make another .forEach that doesn’t call your writeLetter function, but an anonymous function that does the same thing.
 arr.forEach(function(array){
    console.log(array);
})  

// Make a third forEach, that uses an arrow-function - note how similar it is to the anonymous function
 arr.forEach( (array) => {
    console.log(array);
});


// Make a function - name it upper, that receives a string as parameter, and returns the upperCase version of that string
function upper(upperText){
    return upperText.toUpperCase();
}

//upper("Hej");

// Use .map on the array, make it call the upper function, and store the new array in another variable. Console.log that variable, and check that it is an upper case version of your original array
let map = arr.map(upper);
console.log(map);

// Convert the new array into a string, check that the new string is the same as your original string .toUpperCase()
let newString = map.join('');
console.log(newString);

