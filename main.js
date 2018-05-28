"use strict";

document.addEventListener("DOMContentLoaded", addStudents);

async function addStudents(){

    let template = document.querySelector("#studentsinfo");
    let students = document.querySelector("#students");

    let jsonData = await fetch("data.json");
    let names = await jsonData.json();
    console.log(names);

    names.forEach(function(parm){
        let splitNames = parm.split(" ");
        console.log(names);
    })

}

