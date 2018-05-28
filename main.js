"use strict";

document.addEventListener("DOMConentLoaded", addStudent);

async function addStudent(){
// fin DOM ELEMENTER + template + modtager

let template = document.querySelector("#studentinfo");
let students = document.querySelector("#students");

// hent json
let jsonData = await fetch("http://petlatkea.dk/2018/front/students.json");
let names = await jsonData.json();

names.forEach(function(parm){
    let splitNames = parm.split("");
    console.log(names);
})


};