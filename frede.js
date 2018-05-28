
// String fra DOM
//let team = document.querySelector("#teamname").textContent;

// Bare en string
let teamString = `TeamDubbiHansi`;

//convert to array
let arr = Array.from ( teamString );


//loop through the array metode 1 (task 3)
/* let i;
for (i = 0; i < arr.length; i++) {
   // console.log(`"String",${arr}`);
   // console.log(arr[i]);

   writeLetter(arr[6]);
}; */

//loop through the array metode 2 (task 6)
// for each der kalder writeLetter for each one
//arr.forEach(writeLetter);


// function call a letter -- console log til task 5 og 6
/* function writeLetter(letter){
    console.log(letter);
}; */


//loop through the array metode 3 (task 7)
/* arr.forEach(function(array){
    console.log(array);
})  */

//loop through the array metode 4 (task 8)
/* arr.forEach( (array) => {
    console.log(array);
}); */

// Function upper (task 9)
function upper(upperText){
    return upperText.toUpperCase();
}
//upper("Hej");

// Map to store string in a variabel (task 10)
let map = arr.map(upper);
console.log(map);

// convert array back to string (task 11)
let newString = map.join('');
console.log(newString);

