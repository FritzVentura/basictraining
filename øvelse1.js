"use strict";
// String fra DOM
let team = document.querySelector("#teamname").textContent;
// Bare en string
let teamString = `TeamDubbiHansi`;

//convert to array
let arr = Array.from ( team );

/*
//for - Loop iterates through the array
let i;
for(i = 0; i < arr.length; i++) {
    writeLetter(arr[6]);
};

//forEach that iterates through each
arr.forEach(writeLetter);


//function for writing a single letter to console
function writeLetter(letters) {
console.log(letters)
};


//loop through the array -- forEach w. anonymous function
 arr.forEach(function(array){
    console.log(array)
}); 
*/


//arrow function
arr.forEach(array => {
    console.log(array);
}) 


//make string uppercase
function upper(upperText) {
    return upperText.toUpperCase();
};
upper(teamString);


let map = arr.map(upper);
console.log(map)

let newString = map.join('');
console.log(newString);

