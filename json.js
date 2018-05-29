"use strict";

//document.addEventListener("DOMContentLoaded", buildList);

let json = ["Adam Cichy",
    "Kamille Mai Rye",
    "Øjvind Hougaard Rasmussen",
    "Alexander Ellegaard Landberg",
    "Katrine Marie Kofoed Nielsen",
    "Alexander Hedengran Burchardt",
    "Krzysztof Mazur",
    "Alona Virodova",
    "Lasse Kjær Hauerberg",
    "Amalia Stefanescu",
    "Linnea Amina Dahbi Højfeldt",
    "Amalia Blanca Plana Ruiz",
    "Louise Hauge Jessen",
    "Anders Verdier",
    "Maria Macedo Ferreira",
    "Andrei Bolog",
    "Marija Belautdinova",
    "Anne Linde Andersen",
    "Mishari Adel Toama",
    "Benjamin Pelzman",
    "Modestas Sekstela",
    "Birkir Björnsson",
    "Nanna Lisberg",
    "Botond Lorand Birton",
    "Nicklas Toft Povlsen",
    "Bruno Miguel Caetano Amado",
    "Nicolas Møller Holm",
    "Calin Valentin Dima",
    "Niels Erik Raursø",
    "Camille Doussy",
    "Niels Krahmer Gerdes",
    "Cecilie Harbo Holm",
    "Oliver Pyndt Sømme",
    "Charléne Marteyn",
    "Pablo Vicente de la Sota",
    "Chiara Nicola",
    "Patrycja Julia Zawrotniak",
    "Christina Hedegaard Nielsen",
    "Pernille Lee Nørskov",
    "Constantin Guiu",
    "Rasmus Kvist",
    "Dávid Ale",
    "Rita Radovics",
    "Dina El Idrissi",
    "Robert Alexandru Tutu",
    "Dovile Søndergaard",
    "Rosa de Lurdes Afreixo Pires",
    "Edita Gudan",
    "Sofie Linde Kirketerp",
    "Frederik Lee Kofoed",
    "Stine Holm Andersson",
    "Greta Gerulyte",
    "Søren Hermansen",
    "Ioana Vládáu-Babii",
    "Tadeas Kosek",
    "Irina Salagup",
    "Valentina Ivanova Shtarbova",
    "Istvan-Tamas Török",
    "Veronika Machácková",
    "Izabela Anna Turaj",
    "Vítek Linhart",
    "Julie Titte Helt Lund",
    "Wioletta Gluza"
]

// globale variabler
let firstname;
let middlename;
let lastname;
let fullname;


function addStudent(parm) {

    getNameParts(parm);
    //Append to #students
    let the_clone = document.querySelector("#studentsinfo").content.cloneNode(true);

    the_clone.querySelector("li span[data-json='firstname']").textContent = firstname;

    the_clone.querySelector("li span[data-json='middlename']").textContent = middlename;
    the_clone.querySelector("li span[data-json='lastname']").textContent = lastname;
    // the_clone.querySelector(".tester").textContent = "Hejsa";

/*     
    the_clone.querySelector(".delete").addEventListener("click", function(){
        let clickedButton = event.target;
        console.log(clickedButton)
        let buttonParent = clickedButton.parentElement;
        console.log(buttonParent);
        buttonParent.style.display = "none";
    }) */

    document.querySelector("#students").appendChild(the_clone);
}

function buildList() {
    json.forEach(addStudent);
}

buildList();

function getNameParts(fullname) {

    fullname = fullname.split(" ");
    //console.log("Fullname:", fullname.join(" "))

    firstname = fullname[0];
    //console.log("First name:", firstname)

    middlename = fullname.slice(1, -1).join(" ");
    if (middlename) {
        console.log("Middle name:", middlename)
    }else{
        console.log("intet mellemnavn");
    }

    lastname = fullname[fullname.length - 1];
    //console.log("Last name:", lastname)

    return {firstname, middlename, lastname}
}